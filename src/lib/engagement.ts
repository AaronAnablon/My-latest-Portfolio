import { ensureSchema, getSql } from './db';
import type { ProjectComment, ProjectLikeState } from '@/types';

const MAX_AUTHOR_LENGTH = 60;
const MAX_BODY_LENGTH = 500;
const MAX_COMMENTS = 100;

export async function getLikeState(slug: string, visitorId: string): Promise<ProjectLikeState> {
  await ensureSchema();
  const sql = getSql();

  const [{ count }] = await sql`
    SELECT COUNT(*)::int AS count FROM project_likes WHERE project_slug = ${slug}
  `;

  const rows = await sql`
    SELECT 1 FROM project_likes WHERE project_slug = ${slug} AND visitor_id = ${visitorId}
  `;

  return { count, liked: rows.length > 0 };
}

export async function toggleLike(slug: string, visitorId: string): Promise<ProjectLikeState> {
  await ensureSchema();
  const sql = getSql();

  const existing = await sql`
    SELECT 1 FROM project_likes WHERE project_slug = ${slug} AND visitor_id = ${visitorId}
  `;

  if (existing.length > 0) {
    await sql`DELETE FROM project_likes WHERE project_slug = ${slug} AND visitor_id = ${visitorId}`;
  } else {
    await sql`
      INSERT INTO project_likes (project_slug, visitor_id)
      VALUES (${slug}, ${visitorId})
      ON CONFLICT DO NOTHING
    `;
  }

  return getLikeState(slug, visitorId);
}

export async function getComments(slug: string): Promise<ProjectComment[]> {
  await ensureSchema();
  const sql = getSql();

  const rows = await sql`
    SELECT id, author_name, body, created_at
    FROM project_comments
    WHERE project_slug = ${slug}
    ORDER BY created_at DESC
    LIMIT ${MAX_COMMENTS}
  `;

  return rows.map((row) => ({
    id: Number(row.id),
    authorName: row.author_name,
    body: row.body,
    createdAt: row.created_at,
  }));
}

export async function addComment(slug: string, authorName: string, body: string): Promise<ProjectComment> {
  const trimmedAuthor = typeof authorName === 'string' ? authorName.trim().slice(0, MAX_AUTHOR_LENGTH) : '';
  const trimmedBody = typeof body === 'string' ? body.trim().slice(0, MAX_BODY_LENGTH) : '';

  if (!trimmedAuthor || !trimmedBody) {
    throw new Error('Please enter your name and a comment.');
  }

  await ensureSchema();
  const sql = getSql();

  const [row] = await sql`
    INSERT INTO project_comments (project_slug, author_name, body)
    VALUES (${slug}, ${trimmedAuthor}, ${trimmedBody})
    RETURNING id, author_name, body, created_at
  `;

  return {
    id: Number(row.id),
    authorName: row.author_name,
    body: row.body,
    createdAt: row.created_at,
  };
}

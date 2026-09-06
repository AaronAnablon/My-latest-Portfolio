import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let sqlClient: NeonQueryFunction<false, false> | null = null;

export function getSql() {
  if (!sqlClient) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL is not set. Add your Neon connection string to .env.local.');
    }

    sqlClient = neon(connectionString);
  }

  return sqlClient;
}

let schemaReady: Promise<void> | null = null;

export function ensureSchema() {
  if (!schemaReady) {
    const sql = getSql();
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS project_likes (
          project_slug text NOT NULL,
          visitor_id text NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now(),
          PRIMARY KEY (project_slug, visitor_id)
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS project_comments (
          id bigserial PRIMARY KEY,
          project_slug text NOT NULL,
          author_name text NOT NULL,
          body text NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS project_comments_slug_idx
        ON project_comments (project_slug, created_at DESC)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  return schemaReady;
}

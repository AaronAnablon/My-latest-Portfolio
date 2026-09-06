import { NextResponse } from 'next/server';
import { addComment, getComments } from '@/lib/engagement';
import { postSlugs } from '@/lib/postSlugs';

export const runtime = 'nodejs';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  if (!postSlugs.has(params.slug)) {
    return NextResponse.json({ error: 'Unknown post.' }, { status: 404 });
  }

  try {
    const comments = await getComments(params.slug);
    return NextResponse.json(comments);
  } catch {
    return NextResponse.json({ error: 'Unable to load comments right now.' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  if (!postSlugs.has(params.slug)) {
    return NextResponse.json({ error: 'Unknown post.' }, { status: 404 });
  }

  try {
    const { authorName, body } = await request.json();
    const comment = await addComment(params.slug, authorName, body);
    return NextResponse.json(comment);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to post your comment right now.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

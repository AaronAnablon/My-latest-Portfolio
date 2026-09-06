import { NextResponse } from 'next/server';
import { getLikeState, toggleLike } from '@/lib/engagement';
import { getClientIp, hashIp } from '@/lib/ip';
import { postSlugs } from '@/lib/postSlugs';

export const runtime = 'nodejs';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  if (!postSlugs.has(params.slug)) {
    return NextResponse.json({ error: 'Unknown post.' }, { status: 404 });
  }

  try {
    const visitorId = hashIp(getClientIp(request));
    const state = await getLikeState(params.slug, visitorId);
    return NextResponse.json(state);
  } catch {
    return NextResponse.json({ error: 'Unable to load likes right now.' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  if (!postSlugs.has(params.slug)) {
    return NextResponse.json({ error: 'Unknown post.' }, { status: 404 });
  }

  try {
    const visitorId = hashIp(getClientIp(request));
    const state = await toggleLike(params.slug, visitorId);
    return NextResponse.json(state);
  } catch {
    return NextResponse.json({ error: 'Unable to update like right now.' }, { status: 500 });
  }
}

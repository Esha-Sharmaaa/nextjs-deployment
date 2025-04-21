export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch user from GitHub' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}

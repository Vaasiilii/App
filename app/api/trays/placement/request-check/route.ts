import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({} as any));
  if (!body || typeof body.reservationId !== "string" || !body.reservationId) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  return NextResponse.json({ status: "checking" });
}


import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // отключаем возможную статическую оптимизацию

export async function GET() {
  // простой пинг, чтобы в браузере увидеть 200 OK
  return NextResponse.json({ ok: true, route: "/api/shelves/reserve" });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({} as any));
  const valid =
    body && typeof body.userId === "string" && body.userId &&
    typeof body.cartId === "string" && body.cartId &&
    Number.isInteger(body.shelfNo);

  if (!valid) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  return NextResponse.json({
    reservationId: "r-" + Date.now(),
    expiresAt: new Date(Date.now() + 60_000).toISOString()
  });
}


import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const reservationId = searchParams.get("reservationId");
  if (!reservationId) {
    return NextResponse.json({ error: "reservationId required" }, { status: 400 });
  }
  return NextResponse.json({
    status: "fail",
    reason: "rear_not_detected",
    hints: ["Задвиньте поднос до упора", "Проверьте номер тележки", "Проверьте номер полки"]
  });
}


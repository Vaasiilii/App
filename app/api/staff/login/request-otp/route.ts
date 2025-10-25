import { NextRequest, NextResponse } from "next/server";
import { StaffRequestOtpSchema } from "../../../../../lib/validation";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const ok = StaffRequestOtpSchema.safeParse(body).success;
  if (!ok) return NextResponse.json({ error: "Bad request" }, { status: 400 });
  // TODO: отправка реального OTP
  return NextResponse.json({ sent: true });
}




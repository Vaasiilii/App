import { NextRequest, NextResponse } from "next/server";
import { StaffVerifyOtpSchema } from "../../../../../lib/validation";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const ok = StaffVerifyOtpSchema.safeParse(body).success;
  if (!ok) return NextResponse.json({ error: "Bad request" }, { status: 400 });
  // TODO: верификация кода; пока  успех
  return NextResponse.json({ token: "stub.jwt.token" });
}




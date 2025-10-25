import { NextRequest, NextResponse } from "next/server";
import { StaffOverrideSchema } from "../../../../../lib/validation";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const parsed = StaffOverrideSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  // TODO: проверить JWT, пометить полку неисправной, создать инцидент
  const taskId = `T-${new Date().toISOString().slice(0,10)}-${Math.floor(Math.random()*1000).toString().padStart(3,"0")}`;
  return NextResponse.json({ status: "ok", taskId });
}




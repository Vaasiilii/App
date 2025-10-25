import { z } from "zod";

export const StaffRequestOtpSchema = z.object({ phone: z.string().min(4) });
export const StaffVerifyOtpSchema  = z.object({ phone: z.string().min(4), code: z.string().min(4) });
export const StaffOverrideSchema   = z.object({ cartId: z.string().min(1), shelfNo: z.number().int().nonnegative(), reservationId: z.string().optional() });

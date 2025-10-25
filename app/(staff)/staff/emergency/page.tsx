"use client";
import { useState } from "react";

export default function EmergencyPage() {
  const [step, setStep] = useState<"login"|"select"|"done">("login");
  const [phone, setPhone] = useState(""); const [code, setCode] = useState("");
  const [cartId, setCartId] = useState(""); const [shelfNo, setShelfNo] = useState<number | "">("");

  async function requestOtp() {
    const r = await fetch("/api/staff/login/request-otp",{method:"POST",headers:{ "Content-Type":"application/json"},body:JSON.stringify({ phone })});
    if (r.ok) alert("Код отправлен"); else alert("Ошибка");
  }
  async function verifyOtp() {
    const r = await fetch("/api/staff/login/verify",{method:"POST",headers:{ "Content-Type":"application/json"},body:JSON.stringify({ phone, code })});
    if (r.ok) setStep("select"); else alert("Неверный код");
  }
  async function confirmOverride() {
    const r = await fetch("/api/staff/override/confirm",{method:"POST",headers:{ "Content-Type":"application/json"},body:JSON.stringify({ cartId, shelfNo: Number(shelfNo) })});
    if (r.ok) { alert("Подтверждено, создана задача"); setStep("done"); } else alert("Ошибка");
  }

  return (
    <div className="mx-auto max-w-md p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Аварийный режим</h1>

      {step==="login" && (
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm">Телефон</span>
            <input className="mt-1 w-full rounded-lg border p-2" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+7..." />
          </label>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white" onClick={requestOtp}>Запросить код</button>
          <label className="block">
            <span className="text-sm">Код</span>
            <input className="mt-1 w-full rounded-lg border p-2" value={code} onChange={e=>setCode(e.target.value)} placeholder="1234" />
          </label>
          <button className="rounded-lg bg-green-600 px-4 py-2 text-white" onClick={verifyOtp}>Войти</button>
        </div>
      )}

      {step==="select" && (
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm">Стеллаж (тележка)</span>
            <input className="mt-1 w-full rounded-lg border p-2" value={cartId} onChange={e=>setCartId(e.target.value)} placeholder="c12" />
          </label>
          <label className="block">
            <span className="text-sm">Полка (номер)</span>
            <input type="number" className="mt-1 w-full rounded-lg border p-2" value={shelfNo} onChange={e=>setShelfNo(e.target.value===""? "": Number(e.target.value))} placeholder="3" />
          </label>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white" onClick={confirmOverride}>Подтвердить</button>
        </div>
      )}

      {step==="done" && <div className="rounded-lg bg-green-50 p-4"><p>Готово. Полка помечена неисправной.</p></div>}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type TCountdown = { days: number; hours: number; minutes: number; seconds: number };

function getCountdown(target: Date): TCountdown {
const now = Date.now();
const dt = Math.max(0, target.getTime() - now);
const days = Math.floor(dt / 86_400_000);
const hours = Math.floor((dt % 86_400_000) / 3_600_000);
const minutes = Math.floor((dt % 3_600_000) / 60_000);
const seconds = Math.floor((dt % 60_000) / 1_000);
return { days, hours, minutes, seconds };
}

export default function LoginPage() {
const router = useRouter();

// -------- passwords (CASE-SENSITIVE)
const GUEST_PASS = "Bear2026";
const PARTY_PASS = "BearBear2026";

// -------- state
const [password, setPassword] = useState("");
const [error, setError] = useState<string | null>(null);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
setError(null);

// Exact match (case-sensitive)
const isGuest = password === GUEST_PASS;
const isParty = password === PARTY_PASS;

if (!isGuest && !isParty) {
setError("Incorrect password");
return;
}

// Store auth + role for Guards
localStorage.setItem("wed_authed", "true");
localStorage.setItem("wed_role", isParty ? "party" : "guest");

// ---- NEW: trigger music start on this real user gesture
try {
// custom event for your MusicPlayer to listen to
window.dispatchEvent(new Event("wed_play"));
} catch {}

// (Optional legacy hook; harmless if not present)
try { (window as any).__playMusic?.(); } catch {}

router.push("/"); // go to your main/home page
};

// -------- countdown
const targetDate = useMemo(() => new Date("2026-04-17T12:00:00"), []);
const [t, setT] = useState<TCountdown>(() => getCountdown(targetDate));
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);
useEffect(() => {
if (!mounted) return;
const id = setInterval(() => setT(getCountdown(targetDate)), 1000);
return () => clearInterval(id);
}, [mounted, targetDate]);

const GAP = 14;

return (
<main
style={{
minHeight: "100vh",
position: "relative",
overflow: "hidden",
background: "transparent",
}}
>
{/* Background video with gentle color tame */}
<video
autoPlay
muted
loop
playsInline
preload="metadata"
src="/videos/login-bg.mp4"
style={{
position: "fixed",
inset: 0,
width: "100%",
height: "100%",
objectFit: "cover",
zIndex: 0,
pointerEvents: "none",
filter: "saturate(0.81)",
}}
/>

{/* ROW 1 — Names + password @ ~1/3 down */}
<section
style={{
position: "fixed",
left: 0,
right: 0,
top: "23vh",
display: "grid",
placeItems: "center",
zIndex: 2,
pointerEvents: "none",
}}
>
<form
onSubmit={handleSubmit}
style={{
pointerEvents: "auto",
background: "rgba(0,0,0,0.55)",
borderRadius: 18,
padding: "28px 24px",
width: "min(92vw, 420px)",
display: "grid",
textAlign: "center",
boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
}}
>
{/* Names (responsive) */}
<h1
style={{
margin: 0,
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 400,
fontSize: "clamp(34px, 6vw, 56px)",
lineHeight: 1.1,
color: "#fff",
}}
>
Laura & Bryce
</h1>

{/* Location & Date (smaller, tight gap) */}
<p
style={{
margin: "6px 0 0",
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 400,
fontSize: "clamp(14px, 2.5vw, 18px)",
color: "rgba(255,255,255,0.92)",
}}
>
Perugia, Italy • April 17, 2026
</p>

{/* Password — EB Garamond */}
<input
type="password"
value={password}
onChange={(e) => setPassword(e.currentTarget.value)}
placeholder="Enter wedding password"
autoFocus
style={{
marginTop: GAP,
padding: "12px",
borderRadius: 12,
border: "1px solid rgba(255,255,255,0.25)",
background: "#fff",
color: "#111",
fontSize: 16,
fontFamily: "var(--font-garamond), serif",
fontWeight: 400,
}}
/>

{/* Enter — EB Garamond */}
<button
type="submit"
style={{
marginTop: GAP,
padding: "12px",
borderRadius: 14,
border: "none",
fontWeight: 500,
color: "#fff",
background: "linear-gradient(135deg,#0b2e1f,#0f3b27)",
cursor: "pointer",
fontFamily: "var(--font-garamond), serif",
fontSize: 16,
letterSpacing: "0.4px",
}}
>
Enter
</button>

{error && (
<div style={{ color: "#fca5a5", fontSize: 14, marginTop: 4 }}>
{error}
</div>
)}

{/* Hint — EB Garamond */}
<p
style={{
fontSize: 13,
color: "rgba(255,255,255,0.85)",
marginTop: 6,
fontFamily: "var(--font-garamond), serif",
fontStyle: "italic",
}}
>
Need the password? Text Laura or Bryce 💚
</p>
</form>
</section>

{/* ROW 2 — Countdown @ ~2/3 down */}
{mounted && (
<section
aria-label="Countdown to wedding"
style={{
position: "fixed",
left: 0,
right: 0,
top: "61vh",
display: "grid",
placeItems: "center",
zIndex: 1,
pointerEvents: "none",
}}
>
<div
style={{
display: "flex",
gap: "13px",
alignItems: "center",
justifyContent: "center",
flexWrap: "wrap",
color: "#fff",
textShadow: "0 3px 16px rgba(0,0,0,0.55)",
fontFamily: "var(--font-playfair), Georgia, serif",
}}
>
{[
{ label: "Days", value: t.days },
{ label: "Hours", value: t.hours },
{ label: "Minutes", value: t.minutes },
{ label: "Seconds", value: t.seconds },
].map((item) => (
<div
key={item.label}
style={{
minWidth: 84,
padding: "6px 10px",
textAlign: "center",
background: "rgba(0,0,0,0.38)",
borderRadius: 12,
backdropFilter: "blur(2px)",
}}
>
<div
style={{
fontSize: "clamp(22px, 4.4vw, 44px)",
lineHeight: 0.9,
fontWeight: 400,
fontVariantNumeric: "tabular-nums",
letterSpacing: 0.2,
}}
suppressHydrationWarning
>
{String(item.value).padStart(2, "0")}
</div>
<div
style={{
marginTop: 4,
fontSize: "clamp(10px, 1.6vw, 13px)",
opacity: 0.9,
letterSpacing: 0.5,
lineHeight: 1,
}}
>
{item.label}
</div>
</div>
))}
</div>
</section>
)}
</main>
);
}
"use client";
import { useState } from "react";
import Link from "next/link";

import HomeButton from "../components/HomeButton";

type DayKey = "thu" | "fri" | "sat" | "sun";

const INVITES: Record<DayKey, string> = {
thu: "/images/invites/thursday.png",
fri: "/images/invites/friday.png",
sat: "/images/invites/saturday.png",
sun: "/images/invites/sunday.png",
};

export default function SchedulePage() {
const [open, setOpen] = useState<DayKey | null>(null);

return (
<main id="schedShell" style={shellStyle}>
<Panel label="Thursday" date="04.16.26" video="/videos/thursday.mp4" onOpen={() => setOpen("thu")} />
<Panel label="Friday" date="04.17.26" video="/videos/friday.mp4" onOpen={() => setOpen("fri")} />
<Panel label="Saturday" date="04.18.26" video="/videos/saturday.mp4" onOpen={() => setOpen("sat")} />
<Panel label="Sunday" date="04.19.26" video="/videos/sunday.mp4" onOpen={() => setOpen("sun")} />

{open && (
<div style={backdrop} onClick={() => setOpen(null)} role="dialog" aria-modal="true">
<div style={card} onClick={(e) => e.stopPropagation()}>
<button aria-label="Close" onClick={() => setOpen(null)} style={closeBtn}>×</button>
<img src={INVITES[open]} alt="Event invite" style={inviteImg} draggable={false} />
</div>
</div>
)}

<HomeButton />

{/* Floating bottom-center RSVP button */}
<Link
href="/rsvp"
aria-label="RSVP Now"
style={{
position: "fixed",
left: "50%",
transform: "translateX(-50%)",
bottom: 18,
zIndex: 40, // below the modal/backdrop (which is 50) so it won’t cover it
background: "rgba(255,255,255,0.15)",
color: "#fff",
padding: "12px 20px",
borderRadius: 12,
fontFamily: "var(--font-garamond), serif",
fontSize: 18,
textDecoration: "none",
boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
transition: "transform 0.15s ease, box-shadow 0.15s ease",
}}
>
RSVP Now
</Link>

<style>{`
/* Desktop = 4 vertical columns */
#schedShell {
--cols: repeat(4, 1fr);
--row-h: 100vh;
}

/* Phone = 4 horizontal rows */
@media (max-width: 900px) {
#schedShell {
--cols: 1fr;
--row-h: 25vh;
}
}
`}</style>
</main>
);
}

function Panel({
label, date, video, onOpen,
}: { label: string; date: string; video: string; onOpen: () => void }) {
return (
<section style={panel} onClick={onOpen}>
<video
autoPlay
muted
loop
playsInline
preload="metadata"
src={video}
style={bgVideo}
/>
<div style={overlay} />
<div style={textWrap}>
<div style={day}>{label}</div>
<div style={dateStyle}>{date}</div>
</div>
</section>
);
}

/* ---------- Inline styles ---------- */
const shellStyle: React.CSSProperties = {
minHeight: "100vh",
display: "grid",
gridTemplateColumns: "var(--cols)", // Desktop: 4 cols | Phone: 1 col
gridAutoRows: "var(--row-h)", // Desktop: 100vh | Phone: 25vh
};

const panel: React.CSSProperties = {
position: "relative",
cursor: "pointer",
overflow: "hidden",
};

const bgVideo: React.CSSProperties = {
position: "absolute",
inset: 0,
width: "100%",
height: "100%",
objectFit: "cover",
};

const overlay: React.CSSProperties = {
position: "absolute",
inset: 0,
background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.5))",
};

const textWrap: React.CSSProperties = {
position: "relative",
zIndex: 1,
height: "100%",
width: "100%",
display: "flex",
flexDirection: "column",
justifyContent: "center", // vertical centering
alignItems: "center", // horizontal centering
textAlign: "center",
color: "#fff",
fontFamily: "var(--font-playfair), Georgia, serif",
textShadow: "0 4px 20px rgba(0,0,0,0.6)",
gap: 1,
};

const day: React.CSSProperties = {
fontSize: "clamp(28px, 4vw, 54px)",
fontWeight: 400
};

const dateStyle: React.CSSProperties = {
fontSize: "clamp(15px, 1.8vw, 22px)",
opacity: 0.95
};

/* Modal */
const backdrop: React.CSSProperties = {
position: "fixed",
inset: 0,
background: "rgba(0,0,0,0.55)",
display: "grid",
placeItems: "center",
zIndex: 50,
padding: 14,
};

const card: React.CSSProperties = {
position: "relative",
background: "transparent",
borderRadius: 12,
overflow: "hidden",
boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
maxWidth: "92vw",
maxHeight: "90vh",
display: "grid",
placeItems: "center",
};

const closeBtn: React.CSSProperties = {
position: "absolute",
top: 8,
right: 12,
zIndex: 10,
background: "rgba(0,0,0,0.6)",
border: "none",
borderRadius: "50%",
width: 32,
height: 32,
color: "#fff",
fontSize: 20,
cursor: "pointer",
};

const inviteImg: React.CSSProperties = {
display: "block",
maxWidth: "92vw",
maxHeight: "90vh",
width: "auto",
height: "auto",
objectFit: "contain",
borderRadius: 8,
};
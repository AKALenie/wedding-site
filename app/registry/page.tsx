"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HomeButton from "../components/HomeButton";

export default function RegistryPage() {
const router = useRouter();

// Keep private behind login
useEffect(() => {
const ok = localStorage.getItem("wed_authed") === "true";
if (!ok) router.replace("/login");
}, [router]);

return (
<main
style={{
minHeight: "100vh",
position: "relative",
overflow: "hidden",
background: "transparent",
}}
>

<HomeButton />

{/* Background video */}
<video
autoPlay
muted
loop
playsInline
preload="metadata"
src="/videos/registry-bg.mp4"
style={{
position: "fixed",
inset: 0,
width: "100%",
height: "100%",
objectFit: "cover",
zIndex: 0,
pointerEvents: "none",
filter: "saturate(0.85)",
}}
/>

{/* Vertical Title */}
<aside id="regTitle">Registry</aside>

{/* Content */}
<div id="regContent">
{/* Intro */}
<SectionTitle>With Love & Thanks</SectionTitle>
<InfoBox>
<p style={romanticP}>
Your presence is truly the greatest gift. For those who would like
to celebrate with something extra, our registry will be live soon.
</p>
</InfoBox>

{/* Registry Placeholder */}
<SectionTitle>Our Registry</SectionTitle>
<InfoBox>
<p style={romanticP}>
We’re putting the finishing touches on our list. Please check back
soon!
</p>
</InfoBox>
</div>

{/* Responsive CSS */}
<style>{`
:root {
--title-left: clamp(20px, 8vw, 110px);
--content-ml: clamp(260px, 34vw, 520px);
}
#regTitle {
position: fixed;
top: 50%;
transform: translateY(-50%) rotate(180deg);
writing-mode: vertical-rl;
font-family: var(--font-playfair), Georgia, serif;
font-weight: 400;
color: rgba(255,255,255,0.95);
text-shadow: 0 4px 16px rgba(0,0,0,0.55);
padding: 0 12px;
white-space: nowrap;
z-index: 2;
user-select: none;
pointerEvents: none;
left: var(--title-left);
font-size: clamp(44px, 10vw, 108px);
}
#regContent {
position: relative;
z-index: 1;
margin-left: var(--content-ml);
padding: 56px 20px 72px 20px;
width: calc(100vw - var(--content-ml) - 24px);
max-width: 860px;
display: grid;
gap: 44px;
}
@media (max-width: 900px) {
:root { --content-ml: min(44vw, 320px); }
#regTitle { font-size: clamp(28px, 17vw, 58px); left: 0.5vw; }
#regContent { width: calc(100vw - var(--content-ml) - 6px); }
}
`}</style>
</main>
);
}

/* -------- Reusable components & styles -------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
return (
<h2
style={{
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 700,
fontSize: "clamp(31px, 4.9vw, 42px)",
color: "#fff",
margin: 0,
paddingBottom: 0,
textAlign: "left",
textShadow: "0 3px 10px rgba(0,0,0,0.5)",
width: "100%",
maxWidth: "800px",
}}
>
{children}
</h2>
);
}

function InfoBox({ children }: { children: React.ReactNode }) {
return (
<div
style={{
width: "100%",
maxWidth: "800px",
borderRadius: 16,
background: "rgba(11,46,31,0.88)", // deep forest green
border: "1px solid rgba(255,255,255,0.25)",
boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
padding: "18px 22px",
backdropFilter: "blur(2px)",
margin: "0 auto",
marginTop: "-6px",
}}
>
{children}
</div>
);
}

const romanticP: React.CSSProperties = {
margin: 0,
fontFamily: "var(--font-garamond), serif",
fontSize: 20,
color: "rgba(255,255,255,0.95)",
lineHeight: 1.65,
};
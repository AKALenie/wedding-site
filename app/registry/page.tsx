"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HomeButton from "../components/HomeButton";

export default function RegistryPage() {
const router = useRouter();

// Protect behind login
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

<HomeButton />

{/* Vertical Title */}
<aside id="registryTitle">Registry</aside>

{/* Main Content */}
<div id="registryContent">
<SectionTitle>With Love & Thanks</SectionTitle>
<InfoBox>
<p style={romanticP}>
Your presence is truly the greatest gift. For those who would like to
celebrate with something extra, our registry will be live soon.
</p>
</InfoBox>

<SectionTitle>Our Registry</SectionTitle>
<InfoBox>
<p style={romanticP}>
We’re putting the finishing touches on our list. Please check back soon!
</p>
</InfoBox>
</div>

{/* Responsive CSS */}
<style>{`
:root {
--title-left: clamp(20px, 8vw, 110px);
--content-ml: clamp(260px, 34vw, 520px);
}
#registryTitle {
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
pointer-events: none;
left: var(--title-left);
font-size: clamp(44px, 10vw, 108px);
}
#registryContent {
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
:root {
--content-ml: min(18vw, 210px);
--title-left: 8px;
}
#registryTitle {
font-size: clamp(30px, 13vw, 64px);
}
#registryContent {
width: calc(100vw - var(--content-ml) - 10px);
}
}
@media (max-width: 600px) {
:root {
--content-ml: min(22vw, 175px);
--title-left: 6px;
}
#registryTitle {
font-size: clamp(28px, 17vw, 58px);
}
#registryContent {
width: calc(100vw - var(--content-ml) - 6px);
}
}
`}</style>
</main>
);
}

/* Components & styles */
function SectionTitle({ children }: { children: React.ReactNode }) {
return (
<h2
style={{
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 700,
fontSize: "clamp(31px, 4.9vw, 42px)",
color: "#fff",
margin: 0,
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
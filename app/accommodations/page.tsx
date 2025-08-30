"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HomeButton from "../components/HomeButton";

export default function AccommodationsPage() {
const router = useRouter();

// Gate behind login (same as Venue page)
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
src="/videos/accommodations-bg.mp4"
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
<aside id="accomTitle">Accommodations</aside>

{/* Content */}
<div id="accomContent">
{/* Overview */}
<SectionTitle>Overview</SectionTitle>
<InfoBox>
<p style={romanticP}>
We are housing the wedding party and their significant others across two sites:
<em> Tenuta dei Mori in Perugia</em> and <em>House in Sant’enea</em>. Below you’ll find
room assignments for each location so everyone knows where they’ll be staying.
</p>
</InfoBox>

{/* Tenuta dei Mori */}
<SectionTitle>Tenuta dei Mori • Perugia</SectionTitle>
<InfoBox>
<p style={romanticP}>
Nestled in the Umbrian hills, Tenuta dei Mori will host part of our wedding party. Room
assignments are as follows:
</p>
<ul style={listStyle}>
<li><strong>Papavero (2 Bedrooms):</strong> Brantley, Marissa &amp; Sophia</li>
<li><strong>Moro:</strong> Ksenia &amp; Tommy</li>
<li><strong>Melograno:</strong> Haydn, Taylor &amp; Blake</li>
<li><strong>Verbena:</strong> Gabby &amp; Carlos</li>
<li><strong>Acero:</strong> Gabriela &amp; Jack</li>
<li><strong>Tiglio:</strong> Jessie &amp; Cody</li>
</ul>
</InfoBox>

{/* House in Sant'Enea */}
<SectionTitle>House in Sant’Enea</SectionTitle>
<InfoBox>
<p style={romanticP}>
The rest of the wedding party will be staying at a charming country home in Sant’Enea
(5 min down the road from Tenuta dei Mori), a quiet hamlet just outside Perugia.
Located at <em>Str. Villanova 1, Sant’Enea — PG, 6132, Italy</em>, the house blends
rustic Umbrian charm with modern comfort and space to gather together.
</p>
<p style={{ ...romanticP, marginTop: 10 }}>
All guests in this group will be added to the reservation—no need to book separately.
</p>
<ul style={listStyle}>
<li>Will &amp; Heather</li>
<li>Johnny &amp; Anna</li>
<li>Jamie &amp; Dani</li>
<li>Chris &amp; Laura</li>
<li>Poon &amp; Jocey</li>
</ul>

<div style={{ marginTop: 12 }}>
<a
href="https://www.google.com/maps/search/?api=1&query=Str.+Villanova+1%2C+Sant%27Enea%2C+Perugia%2C+Italy"
target="_blank"
rel="noreferrer"
style={linkButton}
>
📍 Open in Google Maps
</a>
</div>
</InfoBox>
</div>

{/* Responsive CSS (same layout behavior as Venue) */}
<style>{`
:root {
--title-left: clamp(20px, 8vw, 110px);
--content-ml: clamp(260px, 34vw, 520px);
}
#accomTitle {
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
#accomContent {
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
#accomTitle { font-size: clamp(30px, 13vw, 64px); }
#accomContent { width: calc(100vw - var(--content-ml) - 10px); }
}
@media (max-width: 600px) {
:root {
--content-ml: min(22vw, 175px);
--title-left: 6px;
}
#accomTitle { font-size: clamp(28px, 17vw, 58px); }
#accomContent { width: calc(100vw - var(--content-ml) - 6px); }
}
@media (max-height: 480px) and (orientation: landscape) {
:root {
--content-ml: min(18vw, 160px);
--title-left: 4px;
}
#accomTitle { font-size: clamp(20px, 10vh, 42px); }
#accomContent {
padding: 24px 12px 36px;
gap: 20px;
width: calc(100vw - var(--content-ml) - 2px);
}
#accomContent p,
#accomContent li {
font-size: 92%;
line-height: 1.55;
}
}
`}</style>
</main>
);
}

/* --- Reusable bits (copied from Venue page) --- */
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
background: "rgba(11,46,31,0.82)",
border: "1px solid rgba(255,255,255,0.25)",
boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
padding: "18px 22px",
backdropFilter: "blur(2px)",
margin: "0 auto",
marginTop: "-10px",
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

const listStyle: React.CSSProperties = {
listStyle: "disc",
paddingLeft: 20,
margin: 0,
display: "grid",
gap: 8,
fontFamily: "var(--font-garamond), serif",
color: "rgba(255,255,255,0.96)",
fontSize: 20,
lineHeight: 1.6,
};

const linkButton: React.CSSProperties = {
textDecoration: "none",
background: "rgba(11,46,31,0.94)",
padding: "10px 16px",
borderRadius: 12,
color: "#fff",
fontFamily: "var(--font-garamond), serif",
fontSize: 17,
boxShadow: "0 6px 12px rgba(0,0,0,0.35)",
};

"use client";
import { useState } from "react";
import Guard from "../Guard";

import HomeButton from "../components/HomeButton";

type YesNo = "Yes" | "No" | "";

export default function RSVPPage() {
const [attending, setAttending] = useState<YesNo>("");
const [thu, setThu] = useState<YesNo>("");
const [fri, setFri] = useState<YesNo>("");
const [sat, setSat] = useState<YesNo>("");
const [diet, setDiet] = useState("");
const [dietItaly, setDietItaly] = useState<YesNo>("");

const [submitting, setSubmitting] = useState(false);
const [done, setDone] = useState(false);
const [error, setError] = useState<string | null>(null);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setError(null);

const form = e.currentTarget;
const data = new FormData(form);

// Basic required fields
const name = String(data.get("name") || "").trim();
const email = String(data.get("email") || "").trim();
const going = String(data.get("attending") || "");

if (!name || !email || !going) {
setError("Please fill in your name, email, and attendance.");
return;
}

if (going === "Yes") {
// Guests + guest names must be provided
const guests = Number(data.get("guests") || "0");
const guestNames = String(data.get("guestNames") || "").trim();
if (!guests || guests < 1) {
setError("Please enter the total number of guests (including you).");
return;
}
if (!guestNames) {
setError("Please list the names of everyone attending (including you).");
return;
}
// Event confirmations required
if (!thu || !fri || !sat) {
setError("Please confirm whether you plan to attend each event.");
return;
}
}

// If dietary needs provided, require Italy-apply answer
const dietary = String(data.get("dietary") || "").trim();
if (dietary && !dietItaly) {
setError("Please let us know if your dietary needs apply in Italy.");
return;
}

// Submit to Formspree
try {
setSubmitting(true);
const res = await fetch("https://formspree.io/f/mldwekky", {
method: "POST",
headers: { Accept: "application/json" },
body: data,
});
if (res.ok) {
setDone(true);
form.reset();
// reset UI state
setAttending("");
setThu("");
setFri("");
setSat("");
setDiet("");
setDietItaly("");
} else {
const j = await res.json().catch(() => ({}));
setError(j?.error ?? "Something went wrong. Please try again.");
}
} catch {
setError("Network error. Please try again.");
} finally {
setSubmitting(false);
}
}

return (
<Guard>
<main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
{/* Background video (no overlay) */}
<video
autoPlay
muted
loop
playsInline
preload="metadata"
src="/videos/rsvp-bg.mp4"
style={{
position: "fixed",
top: 0,
left: 0,
width: "100%",
height: "100%",
objectFit: "cover",
zIndex: -1,
}}
/>

<HomeButton />

{/* Content */}
<div
style={{
minHeight: "100vh",
display: "grid",
placeItems: "start center",
padding: 16,
}}
>
<div style={{ width: "min(100%, 760px)" }}>
{/* Title */}
<div style={titleWrap}>
<h1 style={title}>RSVP</h1>
<p style={subtitle}>We can’t wait to celebrate with you in Perugia!</p>
</div>

{/* Success state */}
{done ? (
<div style={{ ...card, textAlign: "center" }}>
<h2
style={{
margin: 0,
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 400,
fontSize: "clamp(22px, 3.5vw, 30px)",
color: "#fff",
}}
>
Thank you!
</h2>
<p style={{ ...pBase, marginTop: 8 }}>
We’ve received your RSVP. If you need to update anything, submit the form again—
we’ll use your most recent response.
</p>
<button type="button" onClick={() => setDone(false)} style={{ ...button, marginTop: 10 }}>
Submit another response
</button>
</div>
) : (
<form onSubmit={handleSubmit} style={card} noValidate>
{/* Name */}
<label style={label}>
Full Name
<input name="name" type="text" required placeholder="Your name" style={input} />
</label>

{/* Email */}
<label style={label}>
Email
<input name="email" type="email" required placeholder="You@example.com" style={input} />
</label>

{/* Attending */}
<div style={{ display: "grid", gap: 10 }}>
<span style={labelText}>Will you attend?</span>
<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
<label style={radioLabel}>
<input
type="radio"
name="attending"
value="Yes"
checked={attending === "Yes"}
onChange={() => setAttending("Yes")}
required
/>{" "}
Yes
</label>
<label style={radioLabel}>
<input
type="radio"
name="attending"
value="No"
checked={attending === "No"}
onChange={() => setAttending("No")}
required
/>{" "}
No
</label>
</div>
</div>

{/* Show everything else ONLY when attending === "Yes" */}
{attending === "Yes" && (
<>
{/* Guests + guest names */}
<label style={label}>
Number of Guests (including you)
<input
name="guests"
type="number"
min={1}
max={12}
placeholder="1"
style={input}
/>
</label>

<label style={label}>
Guest Names (including you)
<textarea
name="guestNames"
rows={3}
placeholder="e.g., Laura M., Bryce W., …"
style={textarea}
/>
</label>

{/* Event confirmations */}
<div style={{ display: "grid", gap: 8 }}>
<span style={labelText}>Which events will you attend?</span>

<fieldset style={fieldSet}>
<legend style={legend}>Thursday • Welcome Dinner</legend>
<div style={ynRow}>
<label style={radioLabel}>
<input
type="radio"
name="attendThursday"
value="Yes"
checked={thu === "Yes"}
onChange={() => setThu("Yes")}
required
/>{" "}
Yes
</label>
<label style={radioLabel}>
<input
type="radio"
name="attendThursday"
value="No"
checked={thu === "No"}
onChange={() => setThu("No")}
required
/>{" "}
No
</label>
</div>
</fieldset>

<fieldset style={fieldSet}>
<legend style={legend}>Friday • Wedding Day</legend>
<div style={ynRow}>
<label style={radioLabel}>
<input
type="radio"
name="attendFriday"
value="Yes"
checked={fri === "Yes"}
onChange={() => setFri("Yes")}
required
/>{" "}
Yes
</label>
<label style={radioLabel}>
<input
type="radio"
name="attendFriday"
value="No"
checked={fri === "No"}
onChange={() => setFri("No")}
required
/>{" "}
No
</label>
</div>
</fieldset>

<fieldset style={fieldSet}>
<legend style={legend}>Saturday • Relax & Recover</legend>
<div style={ynRow}>
<label style={radioLabel}>
<input
type="radio"
name="attendSaturday"
value="Yes"
checked={sat === "Yes"}
onChange={() => setSat("Yes")}
required
/>{" "}
Yes
</label>
<label style={radioLabel}>
<input
type="radio"
name="attendSaturday"
value="No"
checked={sat === "No"}
onChange={() => setSat("No")}
required
/>{" "}
No
</label>
</div>
</fieldset>
</div>

{/* Dietary */}
<label style={label}>
Dietary Needs
<input
name="dietary"
type="text"
placeholder="Vegetarian, gluten-free, etc."
style={input}
value={diet}
onChange={(e) => setDiet(e.target.value)}
/>
</label>

{/* Do dietary needs apply in Italy? (only required if dietary provided) */}
<div style={{ display: "grid", gap: 10, opacity: diet ? 1 : 1 }}>
<span style={labelText}>Do these dietary needs apply in Italy?</span>
<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
<label style={radioLabel}>
<input
type="radio"
name="dietaryAppliesInItaly"
value="Yes"
checked={dietItaly === "Yes"}
onChange={() => setDietItaly("Yes")}
required={!!diet}
/>{" "}
Yes
</label>
<label style={radioLabel}>
<input
type="radio"
name="dietaryAppliesInItaly"
value="No"
checked={dietItaly === "No"}
onChange={() => setDietItaly("No")}
required={!!diet}
/>{" "}
No
</label>
</div>
</div>

{/* Song request */}
<label style={label}>
Song Request{" "}
<span
style={{
fontWeight: 30,
color: "#f8f5ed",
fontSize: "0.75em",
}}
>
(no promises it’ll be played—we’re just checking who has excellent taste 🎶)
</span>
<input
name="songRequest"
type="text"
placeholder="Title • Artist (optional)"
style={input}
/>
</label>

{/* Message */}
<label style={label}>
Message to the couple
<textarea name="message" rows={4} placeholder="Optional note" style={textarea} />
</label>
</>
)}

{/* Error */}
{error && (
<div style={{ color: "#b91c1c", fontFamily: "var(--font-inter)", fontSize: 14 }}>
{error}
</div>
)}

{/* Submit */}
<button type="submit" style={button} disabled={submitting}>
{submitting ? "Submitting…" : "Submit RSVP"}
</button>
</form>
)}
</div>
</div>

{/* Accessibility: reduce motion -> hide video */}
<style>{`
@media (prefers-reduced-motion: reduce) {
video { display: none !important; }
}
@media (max-width: 520px) {
.card-pad { padding: 16px !important; }
}
`}</style>
</main>
</Guard>
);
}

/* ---------- Styles ---------- */

const titleWrap: React.CSSProperties = {
textAlign: "center",
margin: "8px 0 14px 0",
};

const title: React.CSSProperties = {
margin: 0,
fontFamily: "var(--font-playfair), Georgia, serif",
background: "linear-gradient(135deg,#0b2e1f,#0f3b27)", // button green
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
color: "transparent",
letterSpacing: 0.3,
fontSize: "clamp(28px, 5vw, 64px)",
lineHeight: 1.05,
};

const subtitle: React.CSSProperties = {
margin: "6px 0 0 0",
fontFamily: "var(--font-playfair), Georgia, serif",
fontWeight: 400,
background: "linear-gradient(135deg,#0b2e1f,#0f3b27)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
color: "transparent",
fontSize: "clamp(16px, 2vw, 22px)",
letterSpacing: 0.2,
};

const card: React.CSSProperties = {
background: "rgba(11,46,31,0.7)",
borderRadius: 14,
boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
padding: 20,
display: "grid",
gap: 14,
} as React.CSSProperties;

const pBase: React.CSSProperties = {
margin: 0,
fontFamily: "var(--font-playfair), Georgia, serif", // serif for post-submit message
color: "#fff",
lineHeight: 1.6,
fontSize: 16,
};

const label: React.CSSProperties = {
display: "grid",
gap: 6,
fontFamily: "var(--font-playfair), Georgia, serif", // serif
color: "rgba(255,255,255,0.92)", // pearl white
fontWeight: 500,
};

const labelText: React.CSSProperties = {
fontFamily: "var(--font-playfair), Georgia, serif",
color: "rgba(255,255,255,0.92)",
fontWeight: 500,
} as React.CSSProperties;

const inputBase: React.CSSProperties = {
width: "100%",
borderRadius: 12,
border: "1px solid #d6d3d1",
background: "#fff",
color: "#111",
outline: "none",
padding: "12px 14px",
fontFamily: "var(--font-inter)",
fontSize: 15,
};

const input: React.CSSProperties = { ...inputBase };

const textarea: React.CSSProperties = {
...inputBase,
resize: "vertical",
} as React.CSSProperties;

const radioLabel: React.CSSProperties = {
fontFamily: "Georgia, serif",
color: "rgba(255,255,255,1)",
display: "inline-flex",
alignItems: "center",
gap: 8,
background: "rgba(255,255,255,0.08)",
border: "1px solid rgba(255,255,255,0.28)",
padding: "8px 12px",
borderRadius: 999,
};

const button: React.CSSProperties = {
padding: "12px 16px",
borderRadius: 16,
border: "none",
color: "#fff",
fontWeight: 700,
letterSpacing: 0.25,
cursor: "pointer",
background: "linear-gradient(135deg,#0b2e1f,#0f3b27)",
boxShadow: "0 10px 24px rgba(0,0,0,.25)",
fontFamily: "var(--font-playfair), Georgia, serif", // serif for submit button
};

const fieldSet: React.CSSProperties = {
margin: 0,
padding: 0,
border: "none",
};

const legend: React.CSSProperties = {
fontFamily: "var(--font-playfair), Georgia, serif",
color: "rgba(255,255,255,1)",
fontWeight: 100,
marginBottom: 6,
fontSize: 15,
};

const ynRow: React.CSSProperties = {
display: "flex",
gap: 12,
flexWrap: "wrap",
};
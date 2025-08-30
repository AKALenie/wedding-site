"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import HomeButton from "../components/HomeButton";

// Accordion item
function FAQItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: 14,
        background: "rgba(0,0,0,0.45)",
        boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "16px 18px",
          background: "transparent",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          fontFamily: "var(--font-garamond), serif",
          fontSize: 18,
          letterSpacing: 0.3,
        }}
      >
        <span>{q}</span>
        <span
          aria-hidden
          style={{
            transition: "transform .2s ease",
            transform: `rotate(${open ? 45 : 0}deg)`,
            fontSize: 18,
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          display: "grid",
          transition: "grid-template-rows .25s ease",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            padding: open ? "0 18px 16px" : "0 18px 0",
            color: "rgba(255,255,255,0.92)",
            fontFamily: "var(--font-garamond), serif",
            fontSize: 16,
            lineHeight: 1.55,
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const router = useRouter();

  // Redirect if not authed
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
      {/* Background video (optional) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/videos/faq-bg.mp4"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          filter: "saturate(0.8)",
        }}
      />

	<HomeButton />

      {/* Content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr",
          padding: "24px 0 64px",
        }}
      >
        {/* Title */}
        <header
          style={{
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "10px 16px 18px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 6vw, 54px)",
              lineHeight: 1.1,
              color: "#fff",
              textShadow: "0 3px 14px rgba(0,0,0,0.55)",
            }}
          >
            FAQ
          </h1>
          <p
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              color: "rgba(255,255,255,0.9)",
              textShadow: "0 2px 8px rgba(0,0,0,0.45)",
            }}
          >
            Everything you might want to know
          </p>
        </header>

        {/* Accordion */}
        <section
          style={{
            display: "grid",
            placeItems: "center",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              width: "min(940px, 92vw)",
              display: "grid",
              gap: 14,
            }}
          >
            <FAQItem
              q="What should I wear?"
              a={
                <>
                  <strong>Welcome Night Dinner:</strong> Cocktail attire.  
                  <br />
                  <strong>Wedding:</strong> Black Tie.
                </>
              }
              defaultOpen
            />
            <FAQItem
              q="Are kids invited?"
              a={
                <>
                  Yes! Children are welcome. A babysitter will also be on site to help
                  with little ones throughout the festivities.
                </>
              }
            />
            <FAQItem
              q="When should I RSVP by?"
              a={
                <>
                  Please RSVP by <strong>January 31, 2026</strong> so we can finalize
                  counts.
                </>
              }
            />
            <FAQItem
              q="Where should I stay?"
              a={
                <>
                  We’ll share hotel and agriturismo suggestions on the{" "}
                  <a href="/venue" style={{ color: "#d9f99d" }}>
                    Venue & Travel
                  </a>{" "}
                  page—each is within an easy drive of the estate.
                </>
              }
            />
            <FAQItem
              q="How do I get there?"
              a={
                <>
                  Fly into Rome (FCO) or Florence (FLR). Trains via{" "}
                  <a
                    href="https://www.trenitalia.com/en.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#d9f99d" }}
                  >
                    Trenitalia
                  </a>{" "}
                  to Perugia are frequent. We’ll share taxi/transfer details on the
                  Venue & Travel page.
                </>
              }
            />
            <FAQItem
              q="What’s the schedule?"
              a={
                <>
                  See the{" "}
                  <a href="/schedule" style={{ color: "#d9f99d" }}>
                    Weekend Schedule
                  </a>{" "}
                  page for the latest timings.
                </>
              }
            />
            <FAQItem
              q="Is there a registry?"
              a={
                <>
                  Yes—visit the{" "}
                  <a href="/registry" style={{ color: "#d9f99d" }}>
                    Registry
                  </a>{" "}
                  page. Your presence is our greatest gift!
                </>
              }
            />
            <FAQItem
              q="What will the weather be like?"
              a={
                <>
                  April in Umbria is pleasantly mild—think 55–70°F (13–21°C). A light
                  layer for the evening is a good idea.
                </>
              }
            />
          </div>
        </section>
      </div>
    </main>
  );
}

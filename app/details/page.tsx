"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import HomeButton from "../components/HomeButton";

export default function DetailsPage() {
  const router = useRouter();

  // Keep page private behind login
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
      {/* Background video (swap filename if needed) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/videos/details-bg.mp4"
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

      {/* Vertical title (matches Venue page behavior) */}
      <aside id="detailsTitle">Wedding Details</aside>

      {/* Main content */}
      <div id="detailsContent">
        {/* Date & Time */}
        <SectionTitle>Date & Time</SectionTitle>
        <InfoBox>
          <p style={{ ...romanticP, marginTop: 8 }}>
  Exact ceremony and reception timings will be shared a little closer to the day.  
  Please check the{" "}
  <a
    href="/schedule"
    style={{ color: "#d9f99d", textDecoration: "underline" }}
  >
    schedule
  </a>{" "}
  for Thursday night and Saturday festivities.
</p>
        </InfoBox>

        {/* Location */}
        <SectionTitle>Location</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            <a
              href="https://tenutadeimori.com/"
              target="_blank"
              rel="noreferrer"
              style={linkInline}
            >
              Tenuta dei Mori
            </a>{" "}
            • Perugia, Italy
          </p>
          <p style={{ ...romanticP, marginTop: 8 }}>
            This hilltop estate feels like an absolute dream — golden light, whispering olive trees, and views that seem to go on forever.
            It’s intimate and utterly magical at sunset. We can’t wait to share it with you!
          </p>
        </InfoBox>

        {/* Attire */}
        <SectionTitle>Attire</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            <strong>Black tie.</strong> Think timeless and glamorous: tuxedos, floor-length gowns, sleek silhouettes.
            Evenings can be a touch breezy—feel free to bring a light wrap or jacket for outdoor moments.
          </p>
        </InfoBox>

        {/* Children */}
        <SectionTitle>Children</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Children are warmly welcome. Please let us know on your{" "}
            <a href="/rsvp" style={linkInline}>RSVP</a> so we can arrange the right number of trusted sitters to help throughout the evening.
          </p>
        </InfoBox>

        {/* Weather & Terrain */}
        <SectionTitle>Weather & Terrain</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Spring in Umbria is mild and sunny with cool evenings. Paths around the estate are stone and lawn—block heels recommended.
            Check the latest forecast here:{" "}
            <a
              href="https://weather.com/weather/tenday/l/5c2f3e71fc0899c9550e934455357922d15591d4d0618e0e9c50272fecd6a3ec"
              target="_blank"
              rel="noreferrer"
              style={linkInline}
            >
              Perugia 10-day forecast
            </a>.
          </p>
        </InfoBox>

        {/* RSVP */}
        <SectionTitle>RSVP</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Kindly respond on our{" "}
            <a href="/rsvp" style={linkInline}>RSVP</a> page. We can’t wait to celebrate with you in Perugia!
          </p>
        </InfoBox>
      </div>

      {/* Responsive rules (same layout system as your Venue page) */}
      <style>{`
        :root {
          --title-left: clamp(20px, 8vw, 110px);
          --content-ml: clamp(260px, 34vw, 520px);
        }

        #detailsTitle {
          position: fixed;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-family: var(--font-playfair), Georgia, serif;
          font-weight: 400;
          color: rgba(255,255,255,0.95);
          text-shadow: 0 6px 16px rgba(60,77,96,0.8);
          padding: 0 12px;
          white-space: nowrap;
          z-index: 2;
          user-select: none;
          pointer-events: none;
          left: var(--title-left);
          font-size: clamp(44px, 10vw, 108px);
        }

        #detailsContent {
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
          :root { --content-ml: min(18vw, 210px); --title-left: 8px; }
          #detailsTitle {
  text-shadow: 0 4px 12px rgba(0,0,0,0.65), 
               0 0 6px rgba(0,0,0,0.5); 
}
          #detailsContent { width: calc(100vw - var(--content-ml) - 10px); }
        }

        @media (max-width: 600px) {
          :root { --content-ml: min(22vw, 175px); --title-left: 6px; }
          #detailsTitle { font-size: clamp(28px, 17vw, 58px); }
          #detailsContent { width: calc(100vw - var(--content-ml) - 6px); }
        }

        @media (max-height: 480px) and (orientation: landscape) {
          :root { --content-ml: min(18vw, 160px); --title-left: 4px; }
          #detailsTitle { font-size: clamp(20px, 10vh, 42px); }
          #detailsContent {
            padding: 24px 12px 36px;
            gap: 20px;
            width: calc(100vw - var(--content-ml) - 2px);
          }
          #detailsContent p,
          #detailsContent li {
            font-size: 92%;
            line-height: 1.55;
          }
        }
      `}</style>
    </main>
  );
}

/* === Shared components & styles === */

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
        textShadow: "0 4px 10px rgba(60,77,96,20)",
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
        background: "rgba(108,139,173, 0.8)", // wedding blue
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
  color: "rgba(255,255,255,0.96)",
  lineHeight: 1.65,
};

const linkInline: React.CSSProperties = {
  color: "#d9f99d",
  textDecoration: "underline",
};

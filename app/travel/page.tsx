"use client";
import Guard from "../Guard";

import HomeButton from "../components/HomeButton";

/**
 * Minimal Venue & Travel page
 * - Fullscreen looping video background (no overlay)
 * - Big title in Playfair, same size as Schedule weekday labels
 * - Simple text sections: Venue, Transportation
 */

export default function TravelPage() {
  return (
    <Guard>
      <main
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background video (no overlay) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/venue-bg.mp4"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            // keep colors natural; remove extra filters/overlays
          }}
        />
 	
	<HomeButton />	

        {/* Center content */}
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 24,
            textAlign: "center",
          }}
        >
          <div>
            {/* Title: matches Schedule weekday size */}
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 5vw, 64px)", // same as weekday labels
                lineHeight: 1.05,
                letterSpacing: 0.4,
                color: "#ffffff",
                textShadow: "0 2px 16px rgba(0,0,0,0.45)",
              }}
            >
              Venue & Travel
            </h1>

            {/* Spacing */}
            <div style={{ height: 28 }} />

            {/* Venue section */}
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: 0.3,
                color: "#ffffff",
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              Venue
            </h2>
            <p
              style={{
                margin: "10px 0 0 0",
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(16px, 2.2vw, 22px)",
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0,0,0,0.45)",
              }}
            >
              Tenuta dei Mori in Perugia, Italy
            </p>

            {/* Spacing */}
            <div style={{ height: 28 }} />

            {/* Transportation section */}
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(22px, 3.5vw, 40px)", // same size as “Venue”
                lineHeight: 1.1,
                letterSpacing: 0.3,
                color: "#ffffff",
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              Transportation
            </h2>
            <p
              style={{
                margin: "10px 0 0 0",
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(16px, 2.2vw, 22px)",
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0,0,0,0.45)",
              }}
            >
              <a
                href="https://www.trenitalia.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                }}
              >
                Trenitalia
              </a>
            </p>
          </div>
        </div>

        {/* Accessibility: reduce motion shows first frame/poster only */}
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            video { display: none !important; }
          }
        `}</style>
      </main>
    </Guard>
  );
}

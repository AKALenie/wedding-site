"use client";

import { useEffect, useMemo, useState } from "react";
import Guard from "../Guard";

import HomeButton from "../components/HomeButton";

function buildImageList(count = 100) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return `/images/gallery/${n}.jpg`;
  });
}

export default function GalleryPage() {
  useEffect(() => {
    const ok = localStorage.getItem("wed_authed") === "true";
    if (!ok) location.replace("/login");
  }, []);

  const IMAGES = useMemo(() => buildImageList(100), []);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [hoverSrc, setHoverSrc] = useState<string | null>(null);

  return (
    <Guard>
      <main
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "#0b0f0e",
        }}
      >
        {/* Background video BEHIND the grid */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/gallery-bg.mp4"
          poster="/videos/gallery-bg.jpg"
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.75,          // <<< adjust strength
            filter: "saturate(0.85) brightness(0.95)",
          }}
        />

	<HomeButton />

        {/* Title */}
        <header
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            placeItems: "center",
            padding: "28px 16px 6px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 6vw, 64px)",
              lineHeight: 1.1,
              color: "rgba(255,255,255,0.98)",
              textShadow: "0 6px 24px rgba(0,0,0,0.6)",
            }}
          >
            Gallery
          </h1>
        </header>

        {/* Grid of 100 images */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            padding: "18px 14px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            gap: 8,
            maxWidth: 1440,
            margin: "0 auto",
          }}
        >
          {IMAGES.map((src) => (
            <button
              key={src}
              onClick={() => setPreviewSrc(src)}
              onMouseEnter={() => setHoverSrc(src)}
              onMouseLeave={() => setHoverSrc((s) => (s === src ? null : s))}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                border: "none",
                padding: 0,
                cursor: "zoom-in",
                borderRadius: 10,
                overflow: "hidden",
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                transform: hoverSrc === src ? "scale(1.06)" : "scale(1)",
                transition: "transform .18s ease, box-shadow .18s ease",
                willChange: "transform",
                zIndex: hoverSrc === src ? 3 : 1,
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.2))",
                }}
              />
            </button>
          ))}
        </section>

        {/* Hover preview (desktop) */}
        {hoverSrc && !previewSrc && (
          <div
            style={{
              pointerEvents: "none",
              position: "fixed",
              inset: 0,
              zIndex: 20,
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.35)",
                padding: 8,
                borderRadius: 12,
                boxShadow: "0 20px 80px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src={hoverSrc}
                alt=""
                style={{
                  maxWidth: "min(78vw, 1200px)",
                  maxHeight: "78vh",
                  display: "block",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
        )}

        {/* Click/Tap modal preview */}
        {previewSrc && (
          <div
            onClick={() => setPreviewSrc(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(0,0,0,0.55)",
              display: "grid",
              placeItems: "center",
              padding: 14,
            }}
            aria-modal="true"
            role="dialog"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(0,0,0,0.3)",
                padding: 10,
                borderRadius: 14,
                boxShadow: "0 24px 100px rgba(0,0,0,0.55)",
                position: "relative",
              }}
            >
              <button
                onClick={() => setPreviewSrc(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: -12,
                  right: -12,
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 18,
                }}
              >
                ×
              </button>
              <img
                src={previewSrc}
                alt=""
                style={{
                  maxWidth: "min(94vw, 1200px)",
                  maxHeight: "86vh",
                  display: "block",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
        )}

        {/* Responsiveness + Reduced Motion */}
        <style>{`
          @media (max-width: 1400px) { section[style*="grid-template-columns"] { grid-template-columns: repeat(9, 1fr) !important; } }
          @media (max-width: 1200px) { section[style*="grid-template-columns"] { grid-template-columns: repeat(8, 1fr) !important; } }
          @media (max-width: 1024px) { section[style*="grid-template-columns"] { grid-template-columns: repeat(7, 1fr) !important; } }
          @media (max-width: 900px)  { section[style*="grid-template-columns"] { grid-template-columns: repeat(6, 1fr) !important; } }
          @media (max-width: 760px)  { section[style*="grid-template-columns"] { grid-template-columns: repeat(5, 1fr) !important; } }
          @media (max-width: 640px)  { section[style*="grid-template-columns"] { grid-template-columns: repeat(4, 1fr) !important; } }
          @media (max-width: 520px)  { section[style*="grid-template-columns"] { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 380px)  { section[style*="grid-template-columns"] { grid-template-columns: repeat(2, 1fr) !important; } }

          /* Respect users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            video { display: none !important; }
          }
        `}</style>
      </main>
    </Guard>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "party" | "guest";

export default function HomePage() {
  const router = useRouter();

  // Redirect to /login if not authed
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ok = localStorage.getItem("wed_authed") === "true";
    if (!ok) router.replace("/login");
  }, [router]);

  // Read role from localStorage (set by login page)
  const [role, setRole] = useState<Role | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const r = localStorage.getItem("wed_role");
    setRole(r === "party" ? "party" : "guest"); // default to guest
  }, []);

  // Base buttons (shared for everyone)
  const baseLinks = useMemo(
    () => [
      { href: "/details", label: "Details" },
      { href: "/schedule", label: "Schedule" },
      { href: "/venue", label: "Venue & Travel" },
      { href: "/rsvp", label: "RSVP" },
      { href: "/gallery", label: "Gallery" },
      { href: "/registry", label: "Registry" },
      { href: "/faq", label: "FAQ" },
    ],
    []
  );

  // Add exactly one of: Contact (guests) OR Accommodations (party)
  const links = useMemo(() => {
    if (!role) return baseLinks; // during first render, show base only (avoid flicker)
    const tail =
      role === "party"
        ? [{ href: "/accommodations", label: "Accommodations" }]
        : [{ href: "/contact", label: "Contact" }];
    return [...baseLinks, ...tail];
  }, [baseLinks, role]);

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
        src="/videos/home-bg.mp4" // put your MP4 in /public/videos/
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

      {/* Page content overlays */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "grid",
            placeItems: "center",
            padding: "28px 16px 10px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 6vw, 56px)",
              lineHeight: 1.1,
              color: "#fff",
              textShadow: "0 3px 14px rgba(0,0,0,0.55)",
            }}
          >
            Laura & Bryce
          </h1>
          <p
            style={{
              margin: "8px 0 0",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              color: "rgba(255,255,255,0.92)",
              textShadow: "0 2px 8px rgba(0,0,0,0.45)",
            }}
          >
            Perugia, Italy • April 17, 2026
          </p>
        </header>

        {/* Button grid */}
        <section
          style={{
            display: "grid",
            placeItems: "center",
            padding: "10px 16px 40px",
          }}
        >
          <div
            style={{
              width: "min(1020px, 92vw)",
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  padding: "16px 18px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(11,46,31,0.82)", // translucent green
                  color: "#fff",
                  fontFamily: "var(--font-garamond), serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  letterSpacing: "0.3px",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                  transition: "transform .15s ease, box-shadow .15s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            style={{
              marginTop: 18,
              fontFamily: "var(--font-garamond), serif",
              color: "rgba(255,255,255,0.85)",
              fontSize: 17,
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.45)",
            }}
          >
            Tap any section to explore
          </p>
        </section>
      </div>
    </main>
  );
}
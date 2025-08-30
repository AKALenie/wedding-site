"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import HomeButton from "../components/HomeButton";

export default function ContactPage() {
  const router = useRouter();

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
        src="/videos/contact-bg.mp4"
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
      <aside id="contactTitle">Contact</aside>

      {/* Main Content */}
      <div id="contactContent">
        <SectionTitle>Say Hello</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Questions, RSVP changes, travel help, or just want to say hi, send us a note, we would love to hear from you!
          </p>
        </InfoBox>

        <SectionTitle>Primary Contacts</SectionTitle>
        <InfoBox>
          <ul style={listStyle}>
            <li>
              <strong>Laura</strong> —{" "}
              <a href="mailto:laura.e.balderrama@gmail.com" style={linkInline}>laura.e.balderrama@gmail.com</a>{" "}
              • <a href="tel:480-401-8111" style={linkInline}>(480)401-8111</a>
            </li>
            <li>
              <strong>Bryce</strong> —{" "}
              <a href="mailto:bryceton2216@gmail.com" style={linkInline}>bryceton2216@gmail.com</a>{" "}
              • <a href="tel:626-824-5443" style={linkInline}>(626)824-5443</a>
            </li>
          </ul>
          <p style={{ ...romanticP, marginTop: 10 }}>
            Not using an international phone plan?{" "}
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" style={linkInline}>
              WhatsApp
            </a>{" "}
            works great while traveling!
          </p>
        </InfoBox>

        <SectionTitle>RSVP Help</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Trouble submitting your RSVP or need to update guests/dietary notes? Email{" "}
            <a href="mailto:laura.e.balderrama@gmai.com" style={linkInline}>laura.e.balderrama@gmail.com</a>{" "}
            or head to the{" "}
            <a href="/rsvp" style={linkInline}>RSVP</a> page.
          </p>
        </InfoBox>

        <SectionTitle>Travel & Lodging</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            For airports, trains, car rentals, and hotel ideas, visit{" "}
            <a href="/venue" style={linkInline}>Venue &amp; Travel</a>.
          </p>
        </InfoBox>

        <SectionTitle>Day-of (Italy)</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            On the wedding day, WhatsApp our on-site contact if anything pops up:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>On-site coordinator: Andrea TEL: </strong> —{" "}
              <a href="tel:TBD" style={linkInline}>Will be updated week of wedding</a>{" "}
              •{" "}
              <a
                href="https://wa.me/393330000000"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </InfoBox>
      </div>

      {/* Responsive CSS */}
      <style>{`
        :root {
          --title-left: clamp(20px, 8vw, 110px);
          --content-ml: clamp(260px, 34vw, 520px);
        }
        #contactTitle {
          position: fixed;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-family: var(--font-playfair), Georgia, serif;
          font-weight: 400;
          color: #f8f8f5; /* pearl white */
          text-shadow: 0 10px 16px rgba(0,0,0,5);
          padding: 0 12px;
          white-space: nowrap;
          z-index: 2;
          user-select: none;
          pointer-events: none;
          left: var(--title-left);
          font-size: clamp(44px, 10vw, 108px);
        }
        #contactContent {
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
          #contactTitle {
            font-size: clamp(30px, 13vw, 64px);
          }
          #contactContent {
            width: calc(100vw - var(--content-ml) - 10px);
          }
        }
        @media (max-width: 600px) {
          :root {
            --content-ml: min(22vw, 175px);
            --title-left: 6px;
          }
          #contactTitle {
            font-size: clamp(28px, 17vw, 58px);
          }
          #contactContent {
            width: calc(100vw - var(--content-ml) - 6px);
          }
        }
        @media (max-height: 480px) and (orientation: landscape) {
          :root {
            --content-ml: min(18vw, 160px);
            --title-left: 4px;
          }
          #contactTitle {
            font-size: clamp(20px, 10vh, 42px);
          }
          #contactContent {
            padding: 24px 12px 36px;
            gap: 20px;
            width: calc(100vw - var(--content-ml) - 2px);
          }
          #contactContent p,
          #contactContent li {
            font-size: 92%;
            line-height: 1.55;
          }
        }
      `}</style>
    </main>
  );
}

/* Shared Components */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontWeight: 700,
        fontSize: "clamp(31px, 4.9vw, 42px)",
        color: "#f8f8f5", // pearl white
        margin: 0,
        paddingBottom: 0,
        textAlign: "left",
        textShadow: "0 3px 12px rgba(0,0,0,0.6)",
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
        background: "rgba(11,46,31,0.92)", // deep forest green
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
  color: "#f8f8f5", // pearl white
  lineHeight: 1.65,
};

const listStyle: React.CSSProperties = {
  listStyle: "disc",
  paddingLeft: 20,
  margin: 0,
  display: "grid",
  gap: 8,
  fontFamily: "var(--font-garamond), serif",
  color: "#f8f8f5", // pearl white
  fontSize: 20,
  lineHeight: 1.6,
};

const linkInline: React.CSSProperties = {
  color: "#d9f99d",
  textDecoration: "underline",
};

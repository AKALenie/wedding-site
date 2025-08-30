"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import HomeButton from "../components/HomeButton";


export default function VenuePage() {
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
        src="/videos/venue-bg.mp4"
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
      <aside id="venueTitle">Venue & Travel</aside>

      {/* Main Content */}
      <div id="venueContent">
        {/* Venue */}
        <SectionTitle>Venue</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            The venue is{" "}
            <a
              href="https://tenutadeimori.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#d9f99d", textDecoration: "underline" }}
            >
              Tenuta dei Mori
            </a>
            , a 17th-century farmhouse in the Umbrian hills outside Perugia,
            surrounded by olive groves and vineyards with timeless views and
            golden sunsets.
          </p>

          <p style={{ ...romanticP, marginTop: 16, fontSize: 22 }}>
            We would love to host everyone for the following weekend
            celebrations:
          </p>
          <ul style={listStyle}>
            <li>
              <a href="/schedule#thursday" style={linkInline}>
                <strong>Thursday:</strong> Welcome Dinner
              </a>{" "}
              — relaxed evening to gather and settle in.
            </li>
            <li>
              <a href="/schedule#friday" style={linkInline}>
                <strong>Friday:</strong> Wedding Day
              </a>{" "}
              — ceremony and celebration at the estate.
            </li>
            <li>
              <a href="/schedule#saturday" style={linkInline}>
                <strong>Saturday:</strong> Relax &amp; Recover
              </a>{" "}
              — poolside, sunshine, and slow Umbrian vibes.
            </li>
          </ul>
        </InfoBox>

        {/* Transportation */}
        <SectionTitle>Transportation</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            The closest airports are <strong>Rome Fiumicino (FCO)</strong> and{" "}
            <strong>Florence Peretola (FLR)</strong>.
          </p>
          <ul style={listStyle}>
            <li>
              <strong>From FCO (Rome):</strong> Leonardo Express to{" "}
              <strong>Roma Termini</strong> (~32 min), then Trenitalia to{" "}
              <strong>Perugia</strong>. ~2h30–3h total.
            </li>
            <li>
              <strong>From FLR (Florence):</strong> tram/taxi to{" "}
              <strong>Firenze S.M.N.</strong>, then train to{" "}
              <strong>Perugia</strong> (often one change at Terontola/Arezzo).
              ~2h15–2h45 total.
            </li>
          </ul>

          <p style={{ ...romanticP, marginTop: 12 }}>
            Trains are easy—buy tickets on your phone ~10 minutes before
            boarding. Check schedules on{" "}
            <a
              href="https://www.trenitalia.com"
              target="_blank"
              rel="noreferrer"
              style={linkInline}
            >
              Trenitalia
            </a>{" "}
            or{" "}
            <a
              href="https://www.italiarail.com/"
              target="_blank"
              rel="noreferrer"
              style={linkInline}
            >
              ItaliaRail
            </a>
            . Italian trains can be fashionably late—if you miss one, the next
            usually follows soon.
          </p>

          <p style={{ ...romanticP, marginTop: 12 }}>
            Common terms on your train ticket (with abbreviations):
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Carrozza (Carr.)</strong> — carriage / coach number
            </li>
            <li>
              <strong>Posto (P.)</strong> — seat number (for reserved trains)
            </li>
            <li>
              <strong>Binario (Bin.)</strong> — platform (watch station boards;
              platforms can change)
            </li>
            <li>
              <strong>Partenza (Part.) / Arrivo (Arr.)</strong> — departure /
              arrival times and stations
            </li>
          </ul>

          <p style={{ ...romanticP, marginTop: 12 }}>
            🚗 Renting a car is great for exploring villages and wineries. Italy
            requires an <strong>International Driver’s Permit (IDP)</strong>{" "}
            with your license. You can get one quickly through{" "}
            <a
              href="https://www.aaa.com/vacation/idpf"
              target="_blank"
              rel="noreferrer"
              style={linkInline}
            >
              AAA
            </a>{" "}
            (often same-day in person).
          </p>
        </InfoBox>

        {/* Lodging */}
        <SectionTitle>Lodging</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Options nearby range from fairy-tale castles to countryside villas
            and city-center classics:
          </p>
          <ul style={listStyle}>
            <li>
              <a
                href="https://www.castellomonterone.com/it/"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                Castello di Monterone
              </a>{" "}
              — medieval castle above Perugia. <em>~20 min drive</em>
            </li>
            <li>
              <a
                href="https://www.sinahotels.com/en/h/sina-brufani-perugia/"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                Sina Brufani
              </a>{" "}
              — historic 5★ in the centro storico. <em>~25 min drive</em>
            </li>
            <li>
              <a
                href="https://www.postadonini.it/en/"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                Posta Donini 1579
              </a>{" "}
              — aristocratic villa in gardens. <em>~12 min drive</em>
            </li>
            <li>
              <a
                href="https://www.borgodeicontiresort.com/en/index"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                Borgo dei Conti Resort
              </a>{" "}
              — hilltop castle with spa. <em>~25 min drive</em>
            </li>
            <li>
              <a
                href="https://www.relaiscasamassima.it/en/"
                target="_blank"
                rel="noreferrer"
                style={linkInline}
              >
                Relais Casamassima
              </a>{" "}
              — intimate relais among olive trees. <em>~15 min drive</em>
            </li>
          </ul>
        </InfoBox>

        {/* Local Eats */}
        <SectionTitle>Local Eats</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Umbrian cuisine is rustic, soulful, and unforgettable. A few
            favorites in and around Perugia:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Pizzeria Mediterranea</strong> — lively thin-crust;
              reserve ahead.
            </li>
            <li>
              <strong>La Romantica</strong> — wood-fired classics, cozy and
              family-run.
            </li>
            <li>
              <strong>Carloni 1989</strong> — artisanal gelato; pistachio &amp;
              hazelnut shine.
            </li>
            <li>
              <strong>Gelateria Veneta</strong> — old-school gelato with
              classic flavors.
            </li>
            <li>
              <strong>Osteria a Priori</strong> — vaulted rooms, handmade
              pasta, Umbrian wines.
            </li>
            <li>
              <strong>Dal Mi’ Cocco</strong> — rustic set-menu Umbrian comfort
              food.
            </li>
          </ul>
        </InfoBox>

        {/* Map & Directions */}
        <SectionTitle>Map &amp; Directions</SectionTitle>
        <InfoBox>
          <p style={romanticP}>
            Find Tenuta dei Mori on Google Maps, or download the airport
            directions.
          </p>

          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.18)",
              marginTop: 10,
            }}
          >
            <iframe
              title="Tenuta dei Mori Map"
              src="https://www.google.com/maps?q=Tenuta%20dei%20Mori%20Perugia&output=embed"
              style={{ width: "100%", height: 300, border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div
            style={{
              marginTop: 12,
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tenuta%20dei%20Mori%20Perugia"
              target="_blank"
              rel="noreferrer"
              style={linkButton}
            >
              ✨ Open in Google Maps
            </a>
            <a
              href="/docs/airport-directions.pdf"
              target="_blank"
              rel="noreferrer"
              style={linkButton}
            >
              📄 Download Airport Directions (PDF)
            </a>
          </div>
        </InfoBox>
      </div>

      {/* Responsive CSS */}
      <style>{`
        :root {
          --title-left: clamp(20px, 8vw, 110px);
          --content-ml: clamp(260px, 34vw, 520px);
        }
        #venueTitle {
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
          zIndex: 2;
          user-select: none;
          pointer-events: none;
          left: var(--title-left);
          font-size: clamp(44px, 10vw, 108px);
        }
        #venueContent {
          position: relative;
          zIndex: 1;
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
          #venueTitle {
            font-size: clamp(30px, 13vw, 64px);
          }
          #venueContent {
            width: calc(100vw - var(--content-ml) - 10px);
          }
        }
        @media (max-width: 600px) {
          :root {
            --content-ml: min(22vw, 175px);
            --title-left: 6px;
          }
          #venueTitle {
            font-size: clamp(28px, 17vw, 58px);
          }
          #venueContent {
            width: calc(100vw - var(--content-ml) - 6px);
          }
        }
        @media (max-height: 480px) and (orientation: landscape) {
          :root {
            --content-ml: min(18vw, 160px);
            --title-left: 4px;
          }
          #venueTitle {
            font-size: clamp(20px, 10vh, 42px);
          }
          #venueContent {
            padding: 24px 12px 36px;
            gap: 20px;
            width: calc(100vw - var(--content-ml) - 2px);
          }
          #venueContent p,
          #venueContent li {
            font-size: 92%;
            line-height: 1.55;
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
        background: "rgba(22,16,14,0.82)",
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

const linkInline: React.CSSProperties = {
  color: "#d9f99d",
  textDecoration: "underline",
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

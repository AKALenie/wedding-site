"use client";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      style={{
        position: "fixed",
        top: 20,
        right: 20, // 👈 moves it to top-right
        background: "rgba(255,255,255,0.15)", // 👈 semi-transparent white
        color: "#0b2e1f", // 👈 deep forest green
        padding: "10px 16px",
        borderRadius: 10,
        textDecoration: "none",
        fontFamily: "var(--font-playfair), serif",
        fontWeight: 600,
        fontSize: "15px",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,0.85)";
      }}
    >
      Main Menu
    </Link>
  );
}

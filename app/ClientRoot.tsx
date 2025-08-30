"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MusicPlayer from "./MusicPlayer";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
const router = useRouter();

useEffect(() => {
function onClick(e: MouseEvent) {
if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

const a = (e.target as HTMLElement).closest("a");
if (!a) return;

const href = a.getAttribute("href");
const target = a.getAttribute("target");
if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank") return;

// same-origin only
const url = new URL(href, window.location.href);
if (url.origin !== window.location.origin) return;

// INTERNAL NAV: prevent full reload, route via Next
e.preventDefault();
router.push(url.pathname + url.search + url.hash);
}

window.addEventListener("click", onClick);
return () => window.removeEventListener("click", onClick);
}, [router]);

return (
<>
<MusicPlayer />
{children}
</>
);
}

"use client";
import { useEffect, useRef } from "react";

declare global {
interface Window {
__playMusic?: () => Promise<void>;
}
}

export default function MusicPlayer() {
const audioRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
window.__playMusic = async () => {
try {
if (!audioRef.current) return;
await audioRef.current.play();
} catch {}
};
}, []);

return (
<audio
ref={audioRef}
src="/music/song.mp3"
preload="auto"
loop
/>
);
}
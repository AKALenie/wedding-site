"use client";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    (window as any).__playMusic = async () => {
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

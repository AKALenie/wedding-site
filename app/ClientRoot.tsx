"use client";

import MusicPlayer from "./MusicPlayer";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MusicPlayer />
      {children}
    </>
  );
}

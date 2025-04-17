"use client";

import { useTelegramMiniApp } from "./hooks/useTelegramMiniApps";
import { Header } from "./components/Header";

export default function Home() {
  useTelegramMiniApp();

  return (
    <>
      <Header />
    </>
  );
}

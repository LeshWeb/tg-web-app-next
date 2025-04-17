"use client";

import { useTelegramMiniApp } from "./hooks/useTelegramMiniApps";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

export default function Home() {
  useTelegramMiniApp();

  return (
    <>
      <Header />
    </>
  );
}

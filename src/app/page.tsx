"use client";

import dynamic from "next/dynamic";
import { useTelegramMiniApp } from "./hooks/useTelegramMiniApps";
const DynamicHeader = dynamic(
  () => import("./components/Header").then((mod) => mod.Header),
  { ssr: false }
);

export default function Home() {
  useTelegramMiniApp();

  return <DynamicHeader />;
}

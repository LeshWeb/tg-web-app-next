"use client";

import {  postEvent } from "@telegram-apps/sdk-react";
import { useTelegramMiniApp } from './hooks/useTelegramMiniApps';

export default function Home() {
 useTelegramMiniApp();

  return (
    <>
      <h1 className="text-tg">Начать</h1>
      <button onClick={() => postEvent("web_app_close", {})}>Закрыть</button>
    </>
  );
}

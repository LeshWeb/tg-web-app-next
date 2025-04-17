"use client";

import { postEvent } from "@telegram-apps/sdk-react";
import { useTelegramMiniApp } from "./hooks/useTelegramMiniApps";
import { Button } from "./components/Button";

export default function Home() {
  useTelegramMiniApp();

  return (
    <>
      <h1 className="text-tg">Начать</h1>
      <button onClick={() => postEvent("web_app_close", {})}>Закрыть</button>
      <Button className="px-4 py-2 bg-tg-btn text-tg-text-btn cursor-pointer">
        Закрыть
      </Button>
    </>
  );
}

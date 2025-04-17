'use client";';
import { postEvent } from "@telegram-apps/sdk-react";
import { Button } from "./Button";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

export function Header() {
  const tg = window.Telegram.WebApp;

  return (
    <div className="w-full h-12 flex items-center px-5">
      <Button onClick={() => postEvent("web_app_close", {})}>Закрыть</Button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

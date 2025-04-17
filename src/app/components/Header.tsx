"use client";
import { isTMA, postEvent } from "@telegram-apps/sdk-react";
import { Button } from "./Button";

export function Header() {
  return (
    <div className="w-full h-12 flex items-center px-5">
      <span>
        {isTMA()
          ? window.Telegram.WebApp.initDataUnsafe?.user?.username
          : "Telegram Web App"}
      </span>
      <Button onClick={() => postEvent("web_app_close", {})}>Закрыть</Button>
    </div>
  );
}

import { miniApp } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export function useTelegramMiniApp() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      miniApp.ready();
    }
  }, []);
}

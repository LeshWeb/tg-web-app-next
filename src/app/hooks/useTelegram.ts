import { isTMA } from "@telegram-apps/sdk";

export function useTelegram() {
  if (isTMA()) {
    return window.Telegram.WebApp;
  } else return null;
}

import { isTMA } from "@telegram-apps/sdk";

export function isTMAUsername() {
  if (isTMA()) {
    const initData = window.Telegram?.WebApp.initDataUnsafe.user?.username;
    return initData;
  } else {
    return "NO TMA";
  }
}

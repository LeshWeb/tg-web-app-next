import { isTMA } from "@telegram-apps/sdk";

export const onToggleButton = () => {
  if (isTMA() && window.Telegram?.WebApp.MainButton.isVisible) {
    window.Telegram?.WebApp.MainButton.hide();
  } else if (isTMA() && window.Telegram?.WebApp) {
    window.Telegram?.WebApp.MainButton.show();
  } else {
    console.warn("Your browser does not support Telegram Web Apps.");
  }
};

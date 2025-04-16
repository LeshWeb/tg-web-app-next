import { miniApp } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: any;
    };
  }
}

export function useTelegramMiniApp() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      miniApp.ready();
    }
  }, []);
}
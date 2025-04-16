interface Telegram {
  WebApp: {
    close: () => void;
    ready: () => void;
  };
}

interface Window {
  Telegram: Telegram;
}

"use client";

import { miniApp, postEvent } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    miniApp.ready();
  });

  return (
    <>
      <h1 className="text-tg">Started!</h1>
      <button onClick={() => postEvent("web_app_close", {})}>Закрыть</button>
    </>
  );
}

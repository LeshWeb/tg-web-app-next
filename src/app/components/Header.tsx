"use client";
import { postEvent } from "@telegram-apps/sdk-react";
import { Button } from "./Button";
import { useIsTG } from "../hooks/useIsTG";

export function Header() {
  const initData = useIsTG();
  console.log("initData", initData);

  return (
    <div className="w-full h-12 flex items-center px-5">
      <Button onClick={() => postEvent("web_app_close", {})}>Закрыть</Button>
      <span>{}</span>
    </div>
  );
}

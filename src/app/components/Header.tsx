"use client";
import { postEvent } from "@telegram-apps/sdk-react";
import { Button } from "./Button";
import { isTMAUsername } from "../utils/isTMAUsername";
import { onToggleButton } from "../utils/onToggleButton";

export function Header() {
  return (
    <div className="w-full h-12 flex items-center px-5">
      <span>{isTMAUsername()}</span>
      <Button onClick={() => postEvent("web_app_close", {})}>Закрыть</Button>
      <button onClick={() => onToggleButton()}>toggle</button>
    </div>
  );
}

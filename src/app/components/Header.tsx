"use client";
import { postEvent } from "@telegram-apps/sdk-react";
import { Button } from "./Button";
import { isTMAUsername } from "../utils/isTMAUsername";
import { onToggleButton } from "../utils/onToggleButton";
import Link from "next/link";

export function Header() {
  return (
    <div className="w-full h-12 flex items-center px-5 justify-between">
      <span>{isTMAUsername()}</span>
      <button onClick={() => onToggleButton()}>Toggle</button>
      <Link href="/form">Форма</Link>
      <Link href="/product">Продукты</Link>
      <Button onClick={() => postEvent("web_app_close", {})} />
    </div>
  );
}

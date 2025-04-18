"use client";
import { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import { postEvent, sendData } from "@telegram-apps/sdk";

export function Form() {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const tg = useTelegram();

  const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };

  useEffect(() => {
    if (tg) {
      tg.MainButton.setParams({ text: "Отправить данные" });
    }
  }, [tg]);

  const onSendData = useCallback(() => {
    if (tg && sendData.isAvailable()) {
      postEvent("web_app_data_send", {
        data: JSON.stringify({ country, street, subject }),
      });
      sendData(JSON.stringify({ country, street, subject }));
      setCountry("");
      setStreet("");
    }
  }, [tg, country, street, subject]);

  useEffect(() => {
    if (tg) {
      tg.onEvent("mainButtonClicked", onSendData);
    }
    return tg?.offEvent("mainButtonClicked", onSendData);
  }, [tg]);

  useEffect(() => {
    if (tg && (!street || !country)) {
      tg.MainButton.hide();
    } else if (tg) {
      tg.MainButton.show();
    }
  }, [tg, street, country]);

  return (
    <div className="flex flex-col w-full p-5">
      <input
        className="w-full p-2 mt-4"
        type="text"
        placeholder="Страна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className="w-full p-2 mt-4"
        type="text"
        placeholder="Улица"
        value={street}
        onChange={onChangeStreet}
      />
      <select
        className="p-2 mt-4"
        name="face"
        id="face"
        value={subject}
        onChange={onChangeSubject}
      >
        <option value="physical">Юрическое лицо</option>
        <option value="legal">Физическое лицо</option>
      </select>
    </div>
  );
}

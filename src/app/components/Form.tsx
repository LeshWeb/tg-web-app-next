"use client";
import { useEffect, useState } from "react";
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

  const onSendData = () => {
    const data = {
      country,
      street,
      subject,
    };

    // ТОЛЬКО sendData - postEvent не нужен
    postEvent("web_app_data_send", { data: JSON.stringify(data) });

    // Очистка полей
    setCountry("");
    setStreet("");
  };

  useEffect(() => {
    if (!tg) return;

    tg.MainButton.setParams({
      text: "Отправить данные",
      is_active: true,
      is_visible: true,
    });

    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [tg, onSendData]);

  useEffect(() => {
    if (!tg) return;

    if (street && country) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [tg, street, country]);

  return (
    <div className="flex flex-col w-full p-5">
      <h3 className="text-center mb-4">Введите данные</h3>
      <input
        className="w-full p-2 mt-2 border rounded"
        type="text"
        placeholder="Страна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className="w-full p-2 mt-2 border rounded"
        type="text"
        placeholder="Улица"
        value={street}
        onChange={onChangeStreet}
      />
      <select
        className="p-2 mt-2 border rounded"
        value={subject}
        onChange={onChangeSubject}
      >
        <option value="physical">Физическое лицо</option>
        <option value="legal">Юридическое лицо</option>
      </select>
    </div>
  );
}

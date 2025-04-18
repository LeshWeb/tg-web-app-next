"use client";
import { use, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";

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

  useEffect(() => {
    if (tg && !street && !country) {
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

export function Form() {
  return (
    <div className="flex flex-col w-full p-5">
      <input className="w-full p-2 mt-4" type="text" placeholder="Страна" />
      <input className="w-full p-2 mt-4" type="text" placeholder="Улица" />
      <select className="p-2 mt-4" name="face" id="face">
        <option value="physical">Юрическое лицо</option>
        <option value="legal">Физическое лицо</option>
      </select>
    </div>
  );
}

import { ButtonHTMLAttributes } from "react";

interface Props {
  name: string;
  tailwindClass?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function ButtonCustom({ name, tailwindClass, type }: Props) {
  return (
    <button className={tailwindClass} type={type || "button"}>
      {name}
    </button>
  );
}

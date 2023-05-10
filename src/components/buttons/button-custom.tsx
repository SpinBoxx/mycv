import { ButtonHTMLAttributes } from "react";

interface Props {
  name: string;
  isDisabled?: boolean;
  tailwindClass?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function ButtonCustom({
  name,
  tailwindClass,
  type,
  isDisabled = false,
}: Props) {
  return (
    <button
      className={tailwindClass + ` ${isDisabled && "hover:cursor-not-allowed"}`}
      type={type || "button"}
      disabled={isDisabled}
    >
      {name}
    </button>
  );
}

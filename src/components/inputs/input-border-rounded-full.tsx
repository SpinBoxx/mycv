interface Props {
  placeholder?: string;
}

export default function InputBorderRoundedFull({ placeholder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-full border border-slate-600 bg-transparent px-4 py-2 outline-none focus:border-white focus:outline-none"
    />
  );
}

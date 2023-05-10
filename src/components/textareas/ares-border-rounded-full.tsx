interface Props {
  placeholder?: string;
}

export default function TextAreaBorderRoundedFull({ placeholder }: Props) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className="w-full rounded-3xl border border-slate-600 bg-transparent px-4 pb-3 pt-4 outline-none focus:border-white"
    ></textarea>
  );
}

type Props = {
  items: string[];
  reverse?: boolean;
};

export function Marquee({ items, reverse = false }: Props) {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line py-3" aria-hidden="true">
      <div className={`marquee-track flex w-max gap-10 ${reverse ? "reverse" : ""}`}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="mono whitespace-nowrap text-[11px] tracking-[0.22em] text-lime uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

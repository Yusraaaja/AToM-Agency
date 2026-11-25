interface EditorialTitleProps {
  title: string;
  accent?: string;
  className?: string;
  accentClassName?: string;
}

/** Menyoroti satu frasa dalam judul dengan serif italic editorial. */
export function EditorialTitle({
  title,
  accent,
  className = "",
  accentClassName = "text-accent",
}: EditorialTitleProps) {
  if (!accent || !title.includes(accent)) {
    return <span className={className}>{title}</span>;
  }

  const [before, after] = title.split(accent);

  return (
    <span className={className}>
      {before}
      <em className={`font-editorial italic ${accentClassName}`}>{accent}</em>
      {after}
    </span>
  );
}

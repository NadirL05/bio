type Props = {
  label: string;
  url: string;
  desc?: string;
  badge?: string;
};

export function LinkButton({ label, url, desc, badge }: Props) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-1.5 focus-visible:outline-none"
      >
        <span className="inline-block w-4 text-fg-dim group-hover:text-fg-bright">
          <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
            {">"}
          </span>
        </span>
        <span className="text-fg-dim">[ </span>
        <span>→ {label}</span>
        {badge ? (
          <span className="ml-2 text-xs badge-pulse">[{badge}]</span>
        ) : null}
        <span className="text-fg-dim"> ]</span>
        {desc ? (
          <span className="block sm:inline sm:ml-3 text-fg-dim text-sm pl-8 sm:pl-0">
            {desc}
          </span>
        ) : null}
      </a>
    </li>
  );
}

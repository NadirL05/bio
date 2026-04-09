import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  delay?: number; // ms — décalage de l'animation d'apparition
};

export function LinkSection({ title, children, delay = 0 }: Props) {
  return (
    <section
      className="mb-8 section-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-fg-dim mb-3 text-base">
        <span>## </span>
        <span className="text-fg">{title}</span>
      </h2>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </section>
  );
}

import { TerminalHeader } from "@/components/TerminalHeader";
import { LinkSection } from "@/components/LinkSection";
import { LinkButton } from "@/components/LinkButton";
import { projects, socials, profile } from "@/data/links";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
      <TerminalHeader />

      <LinkSection title="projects" delay={900}>
        {projects.map((p) => (
          <LinkButton
            key={p.url}
            label={p.name}
            url={p.url}
            desc={p.desc}
            badge={p.badge}
          />
        ))}
      </LinkSection>

      <LinkSection title="find_me" delay={1200}>
        {socials.map((s) => (
          <LinkButton
            key={s.url}
            label={`${s.label}/${s.handle}`}
            url={s.url}
          />
        ))}
      </LinkSection>

      <footer className="mt-12 text-fg-dim text-sm">
        <div>
          <span className="text-fg-bright">{profile.handle.toLowerCase()}@bio</span>
          <span>:~$ </span>
          <span className="cursor-blink">▊</span>
        </div>
      </footer>
    </main>
  );
}

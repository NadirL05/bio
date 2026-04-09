import { TerminalHeader } from "@/components/TerminalHeader";
import { LinkSection } from "@/components/LinkSection";
import { LinkButton } from "@/components/LinkButton";
import { pinnedRepos, vercelSites, socials, profile } from "@/data/links";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
      <TerminalHeader />

      <LinkSection title="currently_building" delay={900}>
        {pinnedRepos.map((r) => (
          <LinkButton
            key={r.url}
            label={r.name}
            url={r.url}
            desc={r.desc}
            badge={r.badge}
          />
        ))}
      </LinkSection>

      <LinkSection title="live_deployments" delay={1200}>
        {vercelSites.map((s) => (
          <LinkButton key={s.url} label={s.name} url={s.url} desc={s.desc} />
        ))}
      </LinkSection>

      <LinkSection title="find_me" delay={1500}>
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

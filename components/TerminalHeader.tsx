import { profile } from "@/data/links";
import { Typewriter } from "./Typewriter";

export function TerminalHeader() {
  return (
    <header className="mb-10">
      <div className="text-fg-dim text-sm mb-2">
        <span className="text-fg-bright">{profile.handle.toLowerCase()}@bio</span>
        <span>:~$ </span>
        <Typewriter text="whoami" speed={45} className="text-fg" />
      </div>
      <pre
        aria-label={profile.name}
        className="text-fg-bright text-[10px] sm:text-xs leading-tight whitespace-pre overflow-x-auto glitch-on-hover"
      >
        {profile.asciiArt}
      </pre>
      <p className="mt-4 text-fg">
        <span className="text-fg-dim">{">"} </span>
        <Typewriter text={profile.tagline} speed={18} delay={500} cursor />
      </p>
    </header>
  );
}

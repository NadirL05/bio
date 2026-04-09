// Source unique de vérité pour la page bio.
// Pour ajouter/retirer un lien, édite UNIQUEMENT ce fichier puis redéploie.
//
// Pour rafraîchir la liste vercelSites :
//   vercel login
//   vercel projects ls
// puis copie/colle les noms et URLs ci-dessous.

export type Repo = {
  name: string;
  desc: string;
  url: string;
  badge?: "WIP" | "live" | "beta";
};

export type Site = {
  name: string;
  url: string;
  desc: string;
};

export type Social = {
  label: string;
  handle: string;
  url: string;
};

export const profile = {
  name: "Nadir",
  handle: "NadirL05",
  // Mix EN code-style + FR descriptions (préférence utilisateur)
  tagline: "full-stack dev / SaaS builder — je code des produits, je les déploie, je les fais vivre.",
  // ASCII art "NADIR" — généré avec figlet style "standard"
  asciiArt: String.raw`
 _   _    _    ____ ___ ____
| \ | |  / \  |  _ \_ _|  _ \
|  \| | / _ \ | | | | || |_) |
| |\  |/ ___ \| |_| | ||  _ <
|_| \_/_/   \_\____/___|_| \_\
`.trimEnd(),
};

// Les 2 repos en cours de dev à mettre en avant.
export const pinnedRepos: Repo[] = [
  {
    name: "agentimpact",
    desc: "plateforme d'agents IA — vite + react + shadcn/ui",
    url: "https://github.com/NadirL05/agentimpact",
    badge: "WIP",
  },
  {
    name: "restauyacine",
    desc: "SaaS de gestion resto — next.js 16, supabase, stripe, voiceflow",
    url: "https://github.com/NadirL05/restauyacine",
    badge: "live",
  },
];

// Sites déployés sur Vercel.
// TODO: rafraîchir cette liste avec la sortie de `vercel projects ls`.
// Les entrées ci-dessous sont des PLACEHOLDERS — remplace-les par tes vrais déploiements.
export const vercelSites: Site[] = [
  {
    name: "restauyacine",
    url: "https://restauyacine.vercel.app",
    desc: "saas resto multi-tenant",
  },
  // { name: "<TODO>", url: "https://<TODO>.vercel.app", desc: "<TODO>" },
];

// Comptes sociaux affichés en bas de la page.
export const socials: Social[] = [
  {
    label: "twitter",
    handle: "@nadirmilleback",
    url: "https://twitter.com/nadirmilleback",
  },
  {
    label: "tiktok",
    handle: "@agentimpact",
    url: "https://www.tiktok.com/@agentimpact",
  },
  {
    label: "github",
    handle: "NadirL05",
    url: "https://github.com/NadirL05",
  },
];

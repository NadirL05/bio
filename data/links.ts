// Source unique de vérité pour la page bio.
// Pour ajouter/retirer un lien, édite UNIQUEMENT ce fichier puis redéploie.
//
// Pour rafraîchir la liste de tes projets Vercel :
//   vercel login
//   vercel projects ls
// puis copie/colle les noms et URLs ci-dessous.

export type Project = {
  name: string;
  url: string;
  desc: string;
  badge?: "WIP" | "live" | "beta";
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

// Tes projets : sites en cours de dev + sites déjà live.
// Le badge [WIP] / [live] / [beta] distingue l'état de chaque projet.
// Les 2 vedettes en haut ; ajoute les autres sites Vercel à la suite.
export const projects: Project[] = [
  {
    name: "agentimpact",
    url: "https://www.agentimpact.fr/",
    desc: "plateforme d'agents IA",
    badge: "WIP",
  },
  {
    name: "restauyacine",
    url: "https://restauyacine.vercel.app",
    desc: "SaaS de gestion resto — next.js 16, supabase, stripe, voiceflow",
    badge: "live",
  },
  // TODO: ajoute ici tes autres sites Vercel, par exemple :
  // { name: "airfryer",     url: "https://airfryer.vercel.app",     desc: "...", badge: "live" },
  // { name: "cds",          url: "https://cds.vercel.app",          desc: "...", badge: "live" },
  // { name: "electromed",   url: "https://electromed.vercel.app",   desc: "...", badge: "live" },
  // { name: "sas-plu-3d",   url: "https://sas-plu-3d.vercel.app",   desc: "...", badge: "live" },
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

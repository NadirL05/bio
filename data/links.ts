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
    url: "https://restauyacine.vercel.app/login",
    desc: "SaaS resto — next.js 16, supabase, stripe · clique 'Voir la démo'",
    badge: "live",
  },
  {
    name: "plu-ia",
    url: "https://sas-plu-3d.vercel.app/demo",
    desc: "analyse foncière IA + visu 3D — démo interactive, 3 scénarios, sans signup",
    badge: "beta",
  },
  // Autres sites Vercel disponibles (à activer si tu veux les afficher) :
  // { name: "cds",          url: "https://cds-dun.vercel.app",      desc: "...", badge: "live" },
  // { name: "airfryer",     url: "https://airfryer-five.vercel.app", desc: "...", badge: "live" },
  // { name: "electromed",   url: "https://electromed-stimulation.vercel.app", desc: "...", badge: "live" },
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

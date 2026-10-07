// Deployment origin + base path for the site.
//
// The site deploys to GitHub Pages under the custom domain gameplane.net
// (public/CNAME, Pages settings), so it is served from the root. Unset
// CUSTOM_DOMAIN to go back to the project-page path /gameplane-website.
const CUSTOM_DOMAIN: string | undefined = "https://gameplane.net";

export const SITE = CUSTOM_DOMAIN ?? "https://valgulnecron.github.io";
export const BASE = CUSTOM_DOMAIN ? "/" : "/gameplane-website";

export const GITHUB_URL = "https://github.com/ValgulNecron/Gameplane";
export const VERSION = "v0.2.0-beta.8";

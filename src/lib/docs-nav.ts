import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "./url";

export type DocEntry = CollectionEntry<"docs">;

/** Sidebar sections in display order. */
export const SECTIONS: { id: DocEntry["data"]["section"]; label: string }[] = [
  { id: "start-here", label: "START HERE" },
  { id: "core-concepts", label: "CORE CONCEPTS" },
  { id: "operate", label: "OPERATE" },
  { id: "platform", label: "PLATFORM" },
  { id: "develop", label: "DEVELOP" },
  { id: "reference", label: "REFERENCE" },
];

const sectionIndex = new Map(SECTIONS.map((section, index) => [section.id, index]));

/** Sidebar groups per section. START HERE and CORE CONCEPTS pages have no group. */
export const GROUPS: {
  id: string;
  label: string;
  icon: string;
  section: DocEntry["data"]["section"];
}[] = [
  // OPERATE groups
  { id: "servers-config", label: "Servers & Config", icon: "server", section: "operate" },
  { id: "console-logs", label: "Console & Logs", icon: "terminal", section: "operate" },
  { id: "files-backups", label: "Files & Backups", icon: "folder-archive", section: "operate" },
  { id: "network-automation", label: "Network & Automation", icon: "workflow", section: "operate" },

  // PLATFORM groups
  { id: "cluster-storage", label: "Cluster & Storage", icon: "boxes", section: "platform" },
  { id: "users-access", label: "Users & Access", icon: "users", section: "platform" },
  { id: "audit-observability", label: "Audit & Observability", icon: "activity", section: "platform" },

  // DEVELOP groups
  { id: "modules-sources", label: "Modules & Sources", icon: "package-plus", section: "develop" },
  { id: "api-reference", label: "API & Reference", icon: "braces", section: "develop" },
  { id: "local-development", label: "Local Development", icon: "laptop", section: "develop" },
  { id: "component-guides", label: "Component Guides", icon: "blocks", section: "develop" },
  { id: "testing-release", label: "Testing & Release", icon: "flask-conical", section: "develop" },

  // REFERENCE groups
  { id: "upgrades", label: "Upgrades", icon: "refresh-cw", section: "reference" },
  { id: "troubleshooting", label: "Troubleshooting", icon: "life-buoy", section: "reference" },
  { id: "faq", label: "FAQ", icon: "info", section: "reference" },
  { id: "releases-roadmap", label: "Releases & Roadmap", icon: "milestone", section: "reference" },
  { id: "community", label: "Community", icon: "heart-handshake", section: "reference" },
];

const groupIndex = new Map(GROUPS.map((group) => [group.id, group]));

export async function getOrderedDocs(): Promise<DocEntry[]> {
  const docs = await getCollection("docs");
  const groupOrder = new Map(GROUPS.map((group, index) => [group.id, index]));

  return docs.sort((a, b) => {
    // Primary: section order
    const sectionA = sectionIndex.get(a.data.section) ?? 0;
    const sectionB = sectionIndex.get(b.data.section) ?? 0;
    if (sectionA !== sectionB) return sectionA - sectionB;

    // Secondary: group order (within section)
    const groupA = a.data.group ? groupOrder.get(a.data.group) ?? Infinity : -1;
    const groupB = b.data.group ? groupOrder.get(b.data.group) ?? Infinity : -1;
    if (groupA !== groupB) return groupA - groupB;

    // Tertiary: document order field
    return a.data.order - b.data.order;
  });
}

export function docHref(doc: DocEntry): string {
  return withBase(`/docs/${doc.id}/`);
}

export function sidebarLabel(doc: DocEntry): string {
  return doc.data.sidebarLabel ?? doc.data.title;
}

export function getGroupById(id: string) {
  return groupIndex.get(id);
}

export function getGroupsInSection(section: DocEntry["data"]["section"]) {
  return GROUPS.filter((g) => g.section === section);
}

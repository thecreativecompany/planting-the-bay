export type TapeItem = {
  time: string;
  wallet: string;
  action: string;
  amount?: string;
  company: string;
};

export const tapeItems: TapeItem[] = [
  { time: "14:02:11", wallet: "0x8x...2a", action: "bought", amount: "1,200", company: "UMBRA" },
  { time: "14:02:11", wallet: "0x7d...91", action: "sold", amount: "800", company: "UMBRA" },
  { time: "14:02:11", wallet: "0xa4...cc", action: "bought", company: "YES in OMFG-005" },
  { time: "14:02:11", wallet: "0x31...aa", action: "bought", company: "YES" }
];

export type ActivityItem = {
  name: string;
  code: string;
  title: string;
  timer: string;
  tone: "sky" | "black" | "navy" | "brand";
  glyph: string;
};

export const activityItems: ActivityItem[] = [
  {
    name: "Umbra",
    code: "UMBRA-003",
    title: "UMBRA-003: Align Strategic Investors and Rebalance Liquidity",
    timer: "00:01:00",
    tone: "sky",
    glyph: "✦"
  },
  {
    name: "Omnipair",
    code: "OMFG-005",
    title: "Strategic Raise via OTC Sale at premium or higher",
    timer: "03:00:00",
    tone: "black",
    glyph: "✕"
  },
  {
    name: "Superclaw",
    code: "SUPER-002",
    title: "Burn 2M Team Performance Package + Approve Q2 Roadmap",
    timer: "03:00:00",
    tone: "black",
    glyph: "●"
  },
  {
    name: "Paystream",
    code: "PAYS-002",
    title: "Restructure Paystream",
    timer: "03:00:00",
    tone: "navy",
    glyph: "▰"
  },
  {
    name: "Solomon",
    code: "SOLO-003",
    title: "DP-00003 (MEM): The Gigabus Proposal",
    timer: "03:00:00",
    tone: "navy",
    glyph: "▣"
  },
  {
    name: "MetaDAO",
    code: "META-038",
    title: "Engage Groom Lake Security Initiative - $360,000 USDC",
    timer: "03:00:00",
    tone: "brand",
    glyph: "⌁"
  }
];

export const stats = [
  { label: "Companies", value: "13" },
  { label: "Governance Decisions", value: "103" },
  { label: "Investors", value: "23,234" }
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Explore Markets", href: "#activity" },
  { label: "Companies", href: "#resources" },
  { label: "Docs", href: "#docs" },
  { label: "Resources", href: "#resources" }
];

export type ResourceCompany = {
  name: string;
  description: string;
  image: string;
  href: string;
  raised: string;
  status: string;
};

export const resourceCompanies: ResourceCompany[] = [
  {
    name: "Umbra",
    description: "Permissionless borrowing and leverage on Solana.",
    image: "/resources/umbra.png",
    href: "/companies/umbra",
    raised: "$12.8M",
    status: "Active raise"
  },
  {
    name: "Aegis",
    description: "Risk-aware markets for teams building public internet capital.",
    image: "/resources/aegis.png",
    href: "/companies/aegis",
    raised: "$7.4M",
    status: "Market live"
  },
  {
    name: "Spark",
    description: "Funding experiments and creator-owned network economies.",
    image: "/resources/spark.png",
    href: "/companies/spark",
    raised: "$5.1M",
    status: "Voting open"
  },
  {
    name: "Orbit",
    description: "Governance-native liquidity for emerging Solana projects.",
    image: "/resources/orbit.png",
    href: "/companies/orbit",
    raised: "$9.6M",
    status: "New proposal"
  },
  {
    name: "Northstar",
    description: "Transparent capital allocation for early-stage communities.",
    image: "/resources/spark.png",
    href: "/companies/northstar",
    raised: "$5.6M",
    status: "Treasury live"
  }
];

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type PrincipleItem = {
  icon: "microscope" | "ban" | "shield-off";
  title: string;
  body: string;
};

export type MethodStep = {
  id: string;
  icon: "activity" | "flask-conical" | "split" | "repeat";
  title: string;
  blurb: string;
  body: string;
  items: string[];
};

export type CaseStudySide = {
  label: string;
  items: string[];
};

export type CaseStudy = {
  brand: string;
  sector: string;
  metric: string;
  unit: string;
  before: CaseStudySide;
  after: CaseStudySide;
  note: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type AuditField = {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
};

export type SeoContent = {
  title: string;
  description: string;
  ogDescription: string;
};

export type HeaderContent = {
  logo: string;
  logoAriaLabel: string;
  navAriaLabel: string;
  mobileNavAriaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  ctaLabel: string;
  ctaHref: string;
  nav: NavLink[];
};

export type HeroContent = {
  posterWord1: string;
  posterWord2: string;
  posterStatus: string;
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  ticker: string[];
  liveTickerTemplate: string;
};

export type ManifestoContent = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  closer: string;
};

export type PrinciplesContent = {
  eyebrow: string;
  title: string;
  items: PrincipleItem[];
};

export type CalculatorContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  prompt: string;
  sessionLabel: string;
  trafficLabel: string;
  cvrLabel: string;
  aovLabel: string;
  baselineLabel: string;
  lift15Label: string;
  lift30Label: string;
};

export type MethodContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  openHint: string;
  steps: MethodStep[];
};

export type CaseStudiesContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  studies: CaseStudy[];
};

export type StraightTalkContent = {
  eyebrow: string;
  title: string;
  lead: string;
  faqs: FaqItem[];
};

export type AuditFormContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  prompt: string;
  bottleneckLabel: string;
  bottleneckPlaceholder: string;
  bottlenecks: string[];
  submitLabel: string;
  success: string;
  fields: AuditField[];
};

export type FooterContent = {
  marquee: string[];
  tagline: string;
  clockLabel: string;
  legalLabel: string;
  privacyLabel: string;
  privacyHref: string;
  socialLabel: string;
  socials: SocialLink[];
  wordmark: string;
};

export type HomepageContent = {
  seo: SeoContent;
  skipLink: string;
  header: HeaderContent;
  hero: HeroContent;
  manifesto: ManifestoContent;
  principles: PrinciplesContent;
  calculator: CalculatorContent;
  method: MethodContent;
  caseStudies: CaseStudiesContent;
  straightTalk: StraightTalkContent;
  audit: AuditFormContent;
  footer: FooterContent;
};

export type PrivacyContent = {
  seo: SeoContent;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  email: string;
  backLabel: string;
  backHref: string;
};

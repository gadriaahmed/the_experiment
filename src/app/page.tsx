import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Principles } from "@/components/Principles";
import { Calculator } from "@/components/Calculator";
import { Method } from "@/components/Method";
import { CaseStudies } from "@/components/CaseStudies";
import { StraightTalk } from "@/components/StraightTalk";
import { AuditForm } from "@/components/AuditForm";
import { Footer } from "@/components/Footer";
import { getHomepageContent } from "@/lib/home";

export default function Home() {
  const content = getHomepageContent();

  return (
    <>
      <Header content={content.header} />
      <main id="main-content">
        <Hero content={content.hero} />
        <Manifesto content={content.manifesto} />
        <Principles content={content.principles} />
        <Calculator content={content.calculator} />
        <Method content={content.method} />
        <CaseStudies content={content.caseStudies} />
        <StraightTalk content={content.straightTalk} />
        <AuditForm content={content.audit} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}

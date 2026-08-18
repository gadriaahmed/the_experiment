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

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <Principles />
        <Calculator />
        <Method />
        <CaseStudies />
        <StraightTalk />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
}

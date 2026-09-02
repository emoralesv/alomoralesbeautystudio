import { useState } from "react";
import { AloAssistantChat } from "./components/AloAssistantChat";
import { BridalPackages, XVPackages } from "./components/Packages";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NailServices, PedicureServices, PhotographyServices } from "./components/MoreServices";
import { Services } from "./components/Services";

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <>
      <Header onAssistantOpen={() => setIsAssistantOpen(true)} />
      <main>
        <Hero />
        <Services />
        <XVPackages />
        <BridalPackages />
        <NailServices />
        <PedicureServices />
        <PhotographyServices />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <AloAssistantChat isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </>
  );
}

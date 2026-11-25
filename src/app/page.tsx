import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { UmkmOffer } from "@/components/UmkmOffer";
import { CustomDevelopment } from "@/components/CustomDevelopment";
import { Affiliate } from "@/components/Affiliate";
import { WorkProcess } from "@/components/WorkProcess";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <UmkmOffer />
      <CustomDevelopment />
      <Affiliate />
      <WorkProcess />
      <Faq />
      <Contact />
    </>
  );
}

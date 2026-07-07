import Header from "@/components/Header";
import HeroEditorial from "@/components/HeroEditorial";
import MissionSection from "@/components/MissionSection";
import VisitSection from "@/components/VisitSection";
import FeaturedSection from "@/components/FeaturedSection";
import ImageCollage from "@/components/ImageCollage";
import ValuesSection from "@/components/ValuesSection";
import LeadersSection from "@/components/LeadersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <HeroEditorial />
        <MissionSection />
        <VisitSection />
        <FeaturedSection />
        <ImageCollage />
        <ValuesSection />
        <LeadersSection />
      </main>
      <Footer />
    </>
  );
}

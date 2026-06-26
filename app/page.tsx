import { ActivityPanel, MobileActivitySection } from "@/components/ActivityPanel";
import { BrandMark } from "@/components/BrandMark";
import { DocsSection } from "@/components/DocsSection";
import { Hero } from "@/components/Hero";
import { MarketTicker } from "@/components/MarketTicker";
import { ResourcesSlider } from "@/components/ResourcesSlider";
import { Sidebar } from "@/components/Sidebar";
import { TestimonialStats } from "@/components/TestimonialStats";
import { TopControls } from "@/components/TopControls";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-shell text-ink antialiased">
      <div className="mx-auto flex h-screen w-full max-w-[1920px] overflow-hidden bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-[44px] w-full max-w-full shrink-0 overflow-hidden border-b border-line bg-white/95 backdrop-blur lg:h-[35px]">
            <div className="flex w-[52px] shrink-0 items-center justify-center border-r border-line lg:hidden">
              <BrandMark size={25} label="MetaDAO" />
            </div>
            <MarketTicker />
            <TopControls />
          </header>

          <div className="flex min-h-0 flex-1 overflow-hidden">
            <div className="h-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-white px-6 py-10 sm:px-8 lg:px-[80px] lg:py-[60px] xl:w-[1330px] xl:flex-none">
              <Hero />
              <MobileActivitySection />
              <ResourcesSlider />
              <TestimonialStats />
              <DocsSection />
            </div>
            <ActivityPanel />
          </div>
        </div>
      </div>
    </main>
  );
}

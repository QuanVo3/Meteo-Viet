import AboutUsCTA from "@/src/components/aboutUs";
import AppFeatures from "@/src/components/features";
import UserGuide from "@/src/components/howToUse";
import TopBanner from "@/src/components/topBanner";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col bg-[#ffffff] space-y-10 md:space-y-16 lg:space-y-24 overflow-hidden">
      <div id="home">
        <TopBanner />
      </div>
      <div id="features">
        <AppFeatures />
      </div>
      <div id="guide">
        <UserGuide />
      </div>
      <div id="about">
        <AboutUsCTA />
      </div>
    </div>
  );
}

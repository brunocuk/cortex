import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import PainPoints from "@/components/home/PainPoints";
import Benefits from "@/components/home/Benefits";
import Stats from "@/components/home/Stats";
import ImageStrip from "@/components/home/ImageStrip";
import Modules from "@/components/home/Modules";
import Founder from "@/components/home/Founder";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <PainPoints />
      <Benefits />
      <Stats />
      <ImageStrip />
      <Modules />
      <Founder />
      <FinalCta />
    </>
  );
}

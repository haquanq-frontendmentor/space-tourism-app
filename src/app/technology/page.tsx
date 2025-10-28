import { Container } from "@/components/layouts/Container";
import DesktopBackgroundImage from "@images/technology/background-technology-desktop.jpg";
import MobileBackgroundImage from "@images/technology/background-technology-mobile.jpg";
import TabletBackgroundImage from "@images/technology/background-technology-tablet.jpg";
import Image from "next/image";
import { TerminologyTab } from "./TerminologyTab";

export default function Technology() {
  return (
    <main className="overflow-hidden">
      <Container>
        <div className="absolute inset-0 z-10 h-full *:h-full *:w-full *:object-cover">
          <Image className="md:hidden" src={MobileBackgroundImage} alt="" priority />
          <Image className="hidden md:block lg:hidden" src={TabletBackgroundImage} alt="" priority />
          <Image className="hidden lg:block" src={DesktopBackgroundImage} alt="" priority />
        </div>
        <section className="relative z-20 pt-[clamp(1.5rem,0.0687rem+6.1069vw,3rem)] pb-[clamp(1.5rem,-7.5649rem+38.6768vw,11rem)]">
          <h1 className="text-500 font-secondary text-white uppercase">
            <span className="font-bold opacity-25">03</span>&nbsp;<span>SPACE LAUNCH 101</span>
          </h1>
          <TerminologyTab />
        </section>
      </Container>
    </main>
  );
}

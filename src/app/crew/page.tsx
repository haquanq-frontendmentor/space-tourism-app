import { Container } from "@/components/layouts/Container";
import DesktopBackgroundImage from "@images/crew/background-crew-desktop.jpg";
import MobileBackgroundImage from "@images/crew/background-crew-mobile.jpg";
import TabletBackgroundImage from "@images/crew/background-crew-tablet.jpg";
import Image from "next/image";
import { CrewCarousel } from "./CrewCarousel";

export default function Crew() {
  return (
    <main>
      <Container>
        <div className="absolute inset-0 z-10 h-full *:h-full *:w-full *:object-cover">
          <Image className="md:hidden" src={MobileBackgroundImage} alt="" priority />
          <Image className="hidden md:block lg:hidden" src={TabletBackgroundImage} alt="" priority />
          <Image className="hidden lg:block" src={DesktopBackgroundImage} alt="" priority />
        </div>
        <section className="relative z-20 pt-[clamp(1.5rem,0.0687rem+6.1069vw,3rem)] pb-[clamp(1.5rem,-7.5649rem+38.6768vw,11rem)]">
          <h1 className="text-500 font-secondary text-white uppercase">
            <span className="font-bold opacity-25">02</span>&nbsp;<span>Meet your crew</span>
          </h1>
          <CrewCarousel />
        </section>
      </Container>
    </main>
  );
}

import { Container } from "@/components/layouts/Container";
import { appConfigs } from "@/constants/appConfigs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex grow flex-col overflow-hidden">
      <Container className="flex flex-col">
        <div className="absolute inset-0 z-10 h-full *:h-full *:w-full *:object-cover">
          <Image
            className="md:hidden"
            src={appConfigs.basePath + "/images/home/background-home-desktop.jpg"}
            alt=""
            width={1440}
            height={900}
            priority
          />
          <Image
            className="hidden md:block lg:hidden"
            src={appConfigs.basePath + "/images/home/background-home-tablet.jpg"}
            width={1536}
            height={2048}
            alt=""
            priority
          />
          <Image
            className="hidden lg:block"
            src={appConfigs.basePath + "/images/home/background-home-desktop.jpg"}
            alt=""
            width={750}
            height={1624}
            priority
          />
        </div>
        <section className="relative z-20 flex h-full grow py-[clamp(1.5rem,-4.7023rem+26.4631vw,8rem)] lg:items-end">
          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-start">
              <h1 className="font-accent flex flex-col items-center gap-6 uppercase lg:items-start">
                <span className="text-600 text-blue-300">So, you want to travel to</span>
                <span className="text-100 text-white">space</span>
              </h1>
              <p className="font-primary text-900 max-w-136 justify-self-center text-sm leading-6.75 text-blue-300">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                experience!
              </p>
            </div>
            <div className="flex items-center justify-center pt-[clamp(2.625rem,9.0983rem+-13.486vw,5.9375rem)] lg:p-0">
              <Link
                className="text-400 font-accent group relative flex aspect-square w-[clamp(9rem,1.3664rem+32.57vw,17rem)] items-center justify-center rounded-full bg-white uppercase"
                href="/destination"
              >
                <span className="pointer-events-none absolute -inset-[clamp(3rem,0.6145rem+10.1781vw,5.5rem)] block rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-25"></span>
                Explore
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

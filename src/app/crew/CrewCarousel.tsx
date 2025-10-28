"use client";

import { cn } from "@/utils/cn";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const crewMembers = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./images/crew/image-douglas-hurley.png",
      webp: "./images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./images/crew/image-mark-shuttleworth.png",
      webp: "./images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./images/crew/image-victor-glover.png",
      webp: "./images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./images/crew/image-anousheh-ansari.png",
      webp: "./images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const CrewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePaginationButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    emblaApi?.on("select", (x) => {
      setSelectedIndex(x.selectedScrollSnap());
    });

    emblaApi?.on("scroll", (x) => {
      console.log(x);
    });
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.scrollTo(selectedIndex);
  }, [selectedIndex]);

  return (
    <section className="grid lg:grid-cols-2 lg:gap-16 lg:pt-25">
      <h2 className="sr-only">Crew members</h2>
      <div className="w-full overflow-hidden pt-16 lg:pt-20">
        <div ref={emblaRef} className="embla overflow-hidden">
          <ul className="embla__container flex text-center lg:text-start">
            {crewMembers.map((v) => (
              <li className="embla__slide flex-[0_0_100%]" key={v.name}>
                <p className="text-400 font-accent mb-4 text-white uppercase opacity-50">{v.role}</p>
                <h3 className="text-300 font-accent mb-6 text-white uppercase">{v.name}</h3>
                <p className="text-900 font-primary text-blue-300">{v.bio}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex w-fit gap-4 py-12 lg:mx-0">
          {crewMembers.map((v, index) => (
            <button
              className={cn(
                "aspect-square w-2.5 rounded-full bg-white opacity-50 transition-opacity",
                selectedIndex === index && "opacity-100",
              )}
              key={"pg" + v.name}
              type="button"
              aria-label={`Show member ${index + 1} of ${crewMembers.length}`}
              onClick={() => handlePaginationButtonClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="max-w-116 *:h-full *:w-full *:object-contain *:object-top lg:h-175" aria-hidden="true">
        {crewMembers.map((v, index) => (
          <img src={v.images.png} key={"member-image-" + v.name} alt="" hidden={index !== selectedIndex} />
        ))}
      </div>
    </section>
  );
};

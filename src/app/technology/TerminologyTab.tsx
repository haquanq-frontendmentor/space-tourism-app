"use client";

import { Tab, TabButton, TabList, TabPanel } from "@/components/Tab";
import { cn } from "@/utils/cn";
import { useState } from "react";

const technologies = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./images/technology/image-spaceport-portrait.jpg",
      landscape: "./images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./images/technology/image-space-capsule-portrait.jpg",
      landscape: "./images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export const TerminologyTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="grid lg:grid-cols-[60%_40%] lg:gap-20 lg:pt-22">
      <h2 className="sr-only" id="tab-label">
        Terminologies
      </h2>
      <div className="] relative inset-x-1/2 mx-[-50vw] w-screen max-w-screen overflow-hidden pt-22 pb-8 lg:inset-0 lg:col-start-2 lg:m-0 lg:w-auto lg:overflow-visible lg:p-0 lg:*:w-auto">
        {technologies.map((v, index) => (
          <div className="w-full *:w-full lg:*:w-[120%] lg:*:max-w-[200%]" key={`teminology-images-${index}`}>
            <img className="lg:hidden" src={v.images.landscape} hidden={index !== selectedIndex} />
            <img className="hidden lg:block" src={v.images.portrait} hidden={index !== selectedIndex} />
          </div>
        ))}
      </div>
      <Tab
        className="flex flex-col items-center gap-x-16 gap-y-10 text-center lg:col-start-1 lg:row-start-1 lg:flex-row lg:items-start lg:pt-25 lg:text-start"
        onTabChange={setSelectedIndex}
        aria-labelledby="tab-label"
      >
        <TabList className="flex gap-[clamp(1rem,0.0458rem+4.0712vw,2rem)] lg:flex-col">
          {technologies.map((v, index) => (
            <TabButton
              className={cn(
                "text-400 font-accent aspect-square w-[clamp(2.5rem,0.1145rem+10.1781vw,5rem)] rounded-full text-white inset-ring inset-ring-white/50 transition-[box-shadow] hover:inset-ring-white",
                selectedIndex === index && "bg-white text-blue-900",
              )}
              index={index}
              aria-label={`Show terminology ${index + 1} of ${technologies.length}`}
              key={`tab-button-${v.name}`}
            >
              {index + 1}
            </TabButton>
          ))}
        </TabList>
        <div>
          {technologies.map((v, index) => (
            <TabPanel index={index} key={`tab-panel-${v.name}`}>
              <p className="text-400 font-accent mb-4 text-white uppercase opacity-50">The terminology...</p>
              <h3 className="text-300 font-accent mb-4 text-white uppercase sm:mb-6">{v.name}</h3>
              <p className="text-900 font-primary text-blue-300">{v.description}</p>
            </TabPanel>
          ))}
        </div>
      </Tab>
    </section>
  );
};

"use client";

import { Tab, TabButton, TabList, TabPanel } from "@/components/Tab";
import { cn } from "@/utils/cn";
import { useState } from "react";

const destinations = [
  {
    name: "Moon",
    images: {
      png: "./images/destination/image-moon.png",
      webp: "./images/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./images/destination/image-mars.png",
      webp: "./images/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./images/destination/image-europa.png",
      webp: "./images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./images/destination/image-titan.png",
      webp: "./images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export const DestinationTab = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <div className="grid justify-items-center lg:grid-cols-2 lg:gap-16 lg:pt-40">
      <h2 className="sr-only" id="tab-label">
        Our planets
      </h2>
      <div className="pt-16 pb-20 sm:py-32 lg:p-0">
        {destinations.map((destination, index) => (
          <img
            src={destination.images.png}
            alt=""
            hidden={selectedTabIndex !== index}
            key={"destination-image" + index}
          />
        ))}
      </div>
      <Tab
        className="flex flex-col items-center text-center lg:items-start lg:text-start"
        onTabChange={setSelectedTabIndex}
        aria-labelledby="tab-label"
      >
        <TabList className="mb-[clamp(1.5rem,0.5458rem+4.0712vw,2.5rem)] flex gap-8 text-blue-300">
          {destinations.map((destination, index) => (
            <TabButton
              className="text-800 font-secondary group relative flex h-8 items-start uppercase transition-colors hover:text-white"
              key={destination.name}
              index={index}
            >
              <span>{destination.name}</span>
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 block h-0.75 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-50",
                  selectedTabIndex === index && "opacity-100",
                )}
              ></span>
            </TabButton>
          ))}
        </TabList>
        <div className="max-w-148">
          {destinations.map((destination, index) => (
            <TabPanel key={destination.name} index={index}>
              <h3 className="text-200 font-accent mb-4 text-white uppercase">{destination.name}</h3>
              <p className="text-900 font-primary text-blue-300">{destination.description}</p>
              <div className="my-10 h-[1px] bg-white opacity-25"></div>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] gap-y-6 text-center uppercase lg:text-start">
                <li className="flex flex-col gap-3">
                  <p className="text-700 font-secondary text-blue-300">Avg. distance</p>
                  <span className="font-accent text-[1.75rem] leading-8 text-white">{destination.distance}</span>
                </li>
                <li className="flex flex-col gap-3">
                  <p className="text-700 font-secondary text-blue-300">Est. travel time</p>
                  <span className="font-accent text-[1.75rem] leading-8 text-white">{destination.travel}</span>
                </li>
              </ul>
            </TabPanel>
          ))}
        </div>
      </Tab>
    </div>
  );
};

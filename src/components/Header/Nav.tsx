"use client";

import { appConfigs } from "@/constants/appConfigs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type RouteMetadata = {
  href: string;
  label: string;
};

export const Nav = () => {
  const routes: RouteMetadata[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/destination",
      label: "Destination",
    },
    {
      href: "/crew",
      label: "Crew",
    },
    {
      href: "/technology",
      label: "Technology",
    },
  ];

  const formatIndexNumber = (value: number) => {
    return value.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  };

  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const handleMenuBackdropClick = () => {
    if (expanded) setExpanded(false);
  };

  const handleMenuButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((v) => !v);
  };

  const handleMenuBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleMenuKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setExpanded(false);
    }
  };

  return (
    <nav className="flex h-22 items-center md:h-24">
      <button
        className="peer relative z-[999] flex h-6 items-center justify-center md:hidden"
        type="button"
        aria-label="Mobile menu"
        aria-expanded={expanded}
        aria-controls="mobile-menu"
        onClick={handleMenuButtonClick}
      >
        <img src={appConfigs.basePath + "/images/shared/icon-hamburger.svg"} alt="" hidden={expanded} />
        <img src={appConfigs.basePath + "/images/shared/icon-close.svg"} alt="" hidden={!expanded} />
      </button>

      <div
        className="fixed inset-0 z-[300] hidden peer-aria-expanded:block md:static md:block md:h-full"
        id="mobile-menu"
        onClick={handleMenuBackdropClick}
      >
        <div
          className="absolute inset-y-0 right-0 w-63.5 pt-33.25 pl-8 md:static md:inset-0 md:h-full md:w-auto md:p-0"
          onClick={handleMenuBackgroundClick}
          onKeyDown={handleMenuKeydown}
        >
          <div className="absolute inset-0 z-10 backdrop-blur-[40px] [background:rgba(11,13,23,0.15)] md:left-auto md:w-[max(51.1%,40rem)] md:[background:rgba(255,255,255,0.05)]"></div>
          <ul
            className="text-800 font-secondary relative z-20 flex flex-col gap-8 text-[1rem] leading-4.75 text-white uppercase md:h-full md:flex-row md:gap-12"
            role="list"
          >
            {routes.map((v, index) => (
              <li className="flex items-center md:relative md:h-full" key={v.label + index}>
                <Link
                  className="peer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={v.href}
                  {...(pathname === v.href && { "aria-current": "page" })}
                >
                  <span className="font-bold">{formatIndexNumber(index)}</span>&nbsp;
                  <span>{v.label}</span>
                </Link>
                <div className="absolute inset-x-0 bottom-0 hidden h-[0.1875rem] bg-white opacity-0 transition-opacity peer-hover:opacity-50 peer-aria-selected:opacity-100 md:block"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

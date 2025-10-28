"use client";

import { appConfigs } from "@/constants/appConfigs";
import Link from "next/link";
import { Container } from "../layouts/Container";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="relative z-30 lg:pt-10">
      <div className="relative">
        <Container className="flex max-w-348 items-center justify-between">
          <Link
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/"
            aria-label="Homepage"
          >
            <img src={appConfigs.basePath + "/images/shared/logo.svg"} alt="" />
          </Link>
          <Nav />
        </Container>
      </div>
    </header>
  );
};

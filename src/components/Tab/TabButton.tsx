"use client";

import { cn } from "@/utils/cn";
import { useContext } from "react";
import { TabContext } from "./context";

interface TabButtonProps extends React.ComponentProps<"button"> {
  index: number;
}

export const TabButton = ({ children, index, className, ...restProps }: TabButtonProps) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabContext);

  const handleClick = () => {
    setSelectedIndex(index);
  };

  return (
    <button
      className={cn(
        "focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white focus-visible:outline-dashed",
        className,
      )}
      type="button"
      role="tab"
      aria-selected={selectedIndex === index}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

"use client";

import { useEffect, useRef, useState } from "react";
import { TabContext } from "./context";

interface TabProps extends React.ComponentProps<"div"> {
  onTabChange?: (index: number) => void;
}

export const Tab = ({ children, onTabChange, ...restProps }: TabProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onTabChange?.(selectedIndex);
  }, [selectedIndex]);

  return (
    <div {...restProps} ref={containerRef}>
      <TabContext.Provider value={{ selectedIndex, setSelectedIndex }}>{children}</TabContext.Provider>
    </div>
  );
};

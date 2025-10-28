"use client";

import { useContext } from "react";
import { TabContext } from "./context";

interface TabButtonProps extends React.ComponentProps<"button"> {
  index: number;
}

export const TabButton = ({ children, index, ...restProps }: TabButtonProps) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabContext);

  const handleClick = () => {
    setSelectedIndex(index);
  };

  return (
    <button type="button" role="tab" aria-selected={selectedIndex === index} onClick={handleClick} {...restProps}>
      {children}
    </button>
  );
};

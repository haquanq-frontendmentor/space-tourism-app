"use client";

import { useContext } from "react";
import { TabContext } from "./context";

interface TabPanelProps extends React.ComponentProps<"section"> {
  index: number;
}
export const TabPanel = ({ children, index, ...restProps }: TabPanelProps) => {
  const { selectedIndex } = useContext(TabContext);

  return (
    <section role="tabpanel" {...restProps} hidden={index !== selectedIndex}>
      {children}
    </section>
  );
};

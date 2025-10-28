import { createContext } from "react";

type TabContextData = {
    selectedIndex: number;
    setSelectedIndex: (value: number) => void;
};

const INITIAL_DATA: TabContextData = {
    selectedIndex: 0,
    setSelectedIndex: () => {},
};

const TabContext = createContext<TabContextData>(INITIAL_DATA);

export { TabContext, type TabContextData };

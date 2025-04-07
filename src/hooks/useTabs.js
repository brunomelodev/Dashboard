import { useState } from "react";

export function useTabs(defaultTab) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const isActive = (tab) => activeTab === tab;

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
}

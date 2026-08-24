"use client";

import { useState } from "react";
import TabDivider from "./TabDivider";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
};

export default function HomeTabs({ tabs }: Props) {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const activeTabContent = tabs.find((t) => t.id === currentTab)?.content;

  return (
    <div className="w-full">
      <TabDivider
        tabs={tabs}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />

      <div className="mt-8">
        {activeTabContent}
      </div>
    </div>
  );
}

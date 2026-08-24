"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import TabDivider from "./TabDivider";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
};

export default function GalleryTabs({ tabs }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || tabs[0].id;

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const activeTabContent = tabs.find((t) => t.id === currentTab)?.content;

  return (
    <div className="w-full">
      <TabDivider
        tabs={tabs}
        activeTab={currentTab}
        onTabChange={handleTabChange}
      />

      <div className="mt-8">
        {activeTabContent}
      </div>
    </div>
  );
}

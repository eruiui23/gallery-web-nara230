"use client";

import { TabItem } from "./GalleryTabs";

type Props = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabs: string) => void;
};

export default function TabDivider({ tabs, activeTab, onTabChange }: Props) {
  return (
    <>
      <div className="divider divider-primary  uppercase font-[Arial] text-primary ">
        {tabs.map((tab, tabIdx) => {
          return (
            <div key={tab.id} className="inline-flex items-center">
              <button
                onClick={() => onTabChange(tab.id)}
                className={`transition-colors duration-200 uppercase  ${
                  activeTab === tab.id
                    ? "tab-active text-primary underline-offset-6 font-semibold"
                    : "text-neutral-500 hover:text-white font-semibold"
                }`}
              >
              {/*<span className={`mr-2 duration-200 font-[Gotham] pt-1 ${activeTab === tab.id ? "" : "text-neutral-500 group-hover:text-white" }`}>Fav</span>*/}
                {tab.label}
              </button>
                {tabIdx === tabs.length - 1 ? "" : (
                  <span className="ml-4 text-xl">|</span>
                )}
            </div>
          );
        })}
      </div>
    </>
  );
}

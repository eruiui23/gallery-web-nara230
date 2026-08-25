import GalleryCard from "./GalleryCard";
import Link from "next/link";
import GalleryTabs from "@/components/GalleryTabs";
import { galleryTabsContent } from "@/lib/galleryData";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const myTabs = galleryTabsContent.map((tab) => {
    return {
      id: tab.id,
      label: tab.label,
      content: (
        <div
          key={tab.id}
          className="max-w-450 min-h-screen px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 content-start "
        >
          {tab.items.map((item) => (
            <Link href={item.href} key={item.href}>
              <GalleryCard title={item.title} src={item.src} />
            </Link>
          ))}
        </div>
      ),
    };
  });

  return (
    <div className="mt-30 flex justify-center mx-auto w-7/8 pb-10">
      <div className="flex flex-col">
        <Suspense
          fallback={
            <div className="text-center text-white py-10">Loading tabs...</div>
          }
        >
          <GalleryTabs tabs={myTabs} />
        </Suspense>
      </div>
    </div>
  );
}

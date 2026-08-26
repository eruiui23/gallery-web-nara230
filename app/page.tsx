import { EmblaCarousel } from "@/components/EmblaCarousel";
import ImageWall from "@/components/ImageWall";
import HomeTabs from "@/components/HomeTabs";

const myTabs = [
  {
    id: "fragments",
    label: "Fragments",
    content: <ImageWall key="uprak" folderName="Nara230/Gallery/Uprak" />,
  },
  {
    id: "memories",
    label: "Memories",
    content: (
      <ImageWall key="classmeet" folderName="Nara230/Gallery/classmeet" />
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-screen flex flex-col justify-between py-20">
        <div className="flex flex-1 items-center justify-center overflow-hidden">
          <EmblaCarousel/>
        </div>
      </div>
      <div className="flex w-7/8 flex-col m-auto">
        <HomeTabs tabs={myTabs} />
      </div>
      {/*<ImageWall folderName="Nara230/Gallery/Uprak" />*/}
    </div>
  );
}

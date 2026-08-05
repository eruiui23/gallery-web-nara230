import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import ImageWall from "@/components/ImageWall";

function FavDivider() {
    return (
        <div className="divider divider-primary divider-start uppercase font-[Arial]">
            <span className="-mr-2  font-[Gotham]">Fav</span> Fragments
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col gap-5">
            <div className="h-screen flex flex-col justify-between py-20">
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                    <EmblaCarousel />
                </div>
            </div>
            <div className="flex w-7/8 flex-col m-auto">
                <FavDivider />
            </div>
            <ImageWall folderName="Nara230/*" />
        </div>
    );
}

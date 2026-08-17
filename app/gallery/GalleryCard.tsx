import Image from "next/image";

type Props = {
    title: string;
    src: string;
};

export default function GalleryCard({ title, src }: Props) {
    return (
        <div className="w-full bg-white p-2  cursor-pointer group">
            <div className=" w-full bg-white overflow-hidden">
                <Image
                    src={src}
                    alt="test"
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="group-hover:scale-110 duration-300 object-cover"
                />

            </div>

            <div className="flex flex-row justify-between thinfont pt-2 px-1 text-xs sm:text-sm md:text-base xl:text-xl text-black font-medium group-hover:text-black/80 duration-300 ">
                <div className="">{title}</div>
                <div className="">06/25</div>
            </div>
        </div>
    );
}

// <div className="w-full border-2 border-white">
//     <div className=" w-full bg-black relative">
//         <Image src={src} alt="test" width={600} height={400} className="hover:scale-105 duration-300" />
//         <div className="thinfont absolute bottom-0.5 left-1.5 text-3xl text-white font-medium ">{title}</div>
//     </div>

// </div>

import Image from "next/image";

type Props = {
    title: string;
    src: string;
};

export default function GalleryCard({ title, src }: Props) {
    return (
        // <div className="flex flex-row justify-between w-full border border-white ">
        //     <Image
        //         src={src}
        //         alt="test"
        //         width={200}
        //         height={100}
        //         className="scale-102"
        //     />
        //     <div className="nara my-auto mr-4 text-3xl">{title}</div>
        // </div>

        // <div className="w-full border-2 border-white">
        //     <div className=" w-full bg-black relative">
        //         <Image src={src} alt="test" width={600} height={400} className="hover:scale-105 duration-300" />
        //         <div className="thinfont absolute bottom-0.5 left-1.5 text-3xl text-white font-medium ">{title}</div>
        //     </div>

        // </div>
        <div className="w-full border-t-8 border-x-8 border-white">
            <div className=" w-full h-full bg-white relative">
                <Image
                    src={src}
                    alt="test"
                    width={1200}
                    height={800}
                    sizes="33vw"
                    className=""
                />

                <div className="flex flexrow justify-between">
                    <div className="thinfont p-1 text-xl text-black font-medium ">
                        {title}
                    </div>
                    <div className="thinfont p-1 text-xl text-black font-medium ">
                        06/25
                    </div>
                </div>
            </div>
        </div>
    );
}

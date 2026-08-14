import { Photo } from "@/lib/cloudinary";
import Image from "next/image";

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
    return (
        <div className="bg-neutral-900 group cursor-pointer">
            <Image
                src={photo.src}
                alt="Gallery Photo"
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
            />
        </div>
    );
}

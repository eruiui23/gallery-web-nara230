"use client"
import { Photo } from "@/lib/cloudinary";
import Image from "next/image";
import { useState } from "react";

type Props = {
    photo: Photo;
    index: number;
    preload?: boolean;
};

export default function ImageContainer({ photo, index, preload = false }: Props) {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <div
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            className="bg-neutral-900 group cursor-pointer relative w-full"
        >

            <Image
                src={photo.src}
                alt="Gallery Photo"
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 50vw, 33vw"
                preload={preload}
                // className=" object-cover transition-all duration-400 group-hover:brightness-75 group-hover:scale-102"
                className={`
                                    object-cover transition-all duration-500 ease-in-out
                                    group-hover:scale-105
                                    ${isLoading ? "opacity-0 blur-sm" : "opacity-100 blur-0"}
                                `}
                style={{
                                    transitionDelay: `${index * 150}ms` // 150ms stagger per image
                                }}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}

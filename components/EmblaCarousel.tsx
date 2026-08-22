"use client"
import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import localfont from "next/font/local"

const gothamBold = localfont({
    src: '../public/fonts/GothamBold.otf',
})

const galleryData = [
    {
        id: 1,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751960002/DSCF5566_ndu7yj.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959941/DSCF5988_u4hrb3.png",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959516/DSCF9719_q2qjbk.jpg",
        alt: "Street photography in Tokyo",
        title: "Tokyo Drift",
        category: "Street"
    },
    {
        id: 4,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959517/DSCF4239_ukkxqn.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 5,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258126/R0011276_web_hm9yy5.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 6,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258114/R0011267_web_ggv9pu.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 7,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258113/R0010561-2_web_qycdo5.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
    {
        id: 8,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258113/R0011374_web_o9s3dw.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait"
    },
];

const delay = 4000

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            duration: 75,
        },
        [Autoplay({
            delay: delay,
            stopOnInteraction: true,
        })],
    )
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout

        const onSelect = () => {
            setProgress(0) // Reset progress on slide change
        }

        if (emblaApi) {
            emblaApi.on('select', onSelect)

            // Update progress bar every 50ms
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) return 0
                    return prev + (100 / (delay / 50)) // Increment based on delay
                })
            }, 50)
        }

        return () => {
            clearInterval(interval)
            emblaApi?.off('select', onSelect)
        }
    }, [emblaApi])

    const scrollPrev = () => {
        emblaApi?.scrollPrev()
        emblaApi?.plugins().autoplay.reset() // Reset timer
    }
    const scrollNext = () => {
        emblaApi?.scrollNext()
        emblaApi?.plugins().autoplay.reset() // Reset timer
    }

    const buttonStyles = "font-thin absolute top-1/2 -translate-y-1/2 bg-transparent hover:bg-black/0 text-white/80 hover:text-white/0 text-4xl px-5 py-4 cursor-pointer transition-colors duration-300 z-10 h-full w-3/7"

    return (
        <div className="embla relative">

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {galleryData.map((photo) => (
                        <div className="embla__slide" key={photo.id}>
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={0}
                                height={0}
                                sizes='100vw'
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button tabIndex={-1} className={`${buttonStyles} ${gothamBold.className} left-0 `} onClick={scrollPrev}>
            </button>
            <button tabIndex={-1} className={`${buttonStyles} ${gothamBold.className} right-0`} onClick={scrollNext}>
            </button>

        </div>
    )
}

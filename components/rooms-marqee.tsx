"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '@/components/ui/carousel';
import { Star } from "lucide-react";

gsap.registerPlugin(useGSAP);

const cards = [
  {
    alt: "contemporary luxurious house",
    caption: "Contemporary luxurious house",
    className: "",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    src: "/images/contemporary-luxurious-house.webp",
  },
  {
    alt: "modern bedroom interior",
    caption: "Modern bedroom interior",
    className: "",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    src: "/images/modern-bedroom-interior.webp",
  },
  {
    alt: "new luxurious house",
    caption: "New luxurious house",
    className: "",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    src: "/images/new-luxurious-house.webp",
  },
  {
    alt: "modern living room",
    caption: "Modern living room",
    className: "",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    src: "/images/modern-living-room.webp",
  }
]

export default function RoomsMarqee() {
  
  useGSAP(() => {
    gsap.from(".room-card", {
      scrollTrigger: {
        trigger: ".room-card",
        scrub: 1,
        start: "top bottom",
        end: "bottom 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 1,
    });
  });
  
  return (
    <section className="bg-secondary/20 py-20">
      <div className="mx-auto max-w-5xl flex">
      <Carousel>
        <CarouselContent className='-ml-4 *:not-first:border-l *:not-first:border-secondary'>
        {
          cards.map((card, index) => {
            return (
              <CarouselItem className='basis-1/3 pl-4' key={index}>
              <div className="flex flex-col justify-between w-full gap-2 px-4 room-card">
                <figure className="max-h-64 overflow-y-hidden flex flex-col justify-between">
                  <Image alt={card.alt} className={cn("aspect-video object-cover w-full rounded-lg", card.className)} height={400} src={card.src} width={400} />
                  <figcaption className="font-semibold">
                    {card.caption}
                  </figcaption>
                  <div className="flex"><Star className="fill-amber-300 size-4 stroke-none" /><Star className="fill-amber-300 size-4 stroke-none" /><Star className="fill-amber-300 size-4 stroke-none" /><Star className="fill-amber-300 size-4 stroke-none" /><Star className="fill-amber-300 size-4 stroke-none" /></div>
                </figure>
                <p className="text-muted-foreground text-sm">
                  {card.descrition}
                </p>
              </div>
              </CarouselItem>
            );
          })
        }
        </CarouselContent>
        <CarouselNavigation
          className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
          alwaysShow
        />
      </Carousel>
      </div>
    </section>
  );
}
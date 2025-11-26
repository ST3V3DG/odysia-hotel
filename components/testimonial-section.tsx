"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const mainTestimonial = {
  name: "Alex R.",
  message:
    "I came for the luxury but left with a story. The guided mountain trek was a life-changing experience. I've never felt so connected to nature.",
  profession: "Explorer",
  image: {
    alt: "Portrait of Alex R.",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
};

const secondaryTestimonials = [
  {
    name: "Jordan T.",
    message:
      "From the starlit dinner on the private bluff to the morning kayak trip, every moment felt curated for adventure. This is not just a hotel; it's a memory-maker.",
    profession: "Adventurer",
    image: {
      alt: "Portrait of Jordan T.",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
  },
  {
    name: "Samira K.",
    message:
      "The 'Wilderness Wellness' spa was the perfect way to unwind after a day of exploring. The blend of raw nature and refined comfort is something I've never experienced before.",
    profession: "Voyager",
    image: {
      alt: "Portrait of Samira K.",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
  },
  {
    name: "Ben L.",
    message:
      "We brought our family for a different kind of vacation, and it exceeded all expectations. The 'Little Explorers' program was a hit with our kids. We're already planning our return.",
    profession: "Family Adventurers",
    image: {
      alt: "Portrait of Ben L.",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
  },
];

export default function TestimonialSection() {
  const mainQuoteRef = useRef(null);

  useGSAP(() => {
    SplitText.create(mainQuoteRef.current, {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          y: -35,
          stagger: 0.05,
          duration: 0.3,
          scrollTrigger: {
            trigger: mainQuoteRef.current,
            endTrigger: mainQuoteRef.current,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        });
      },
    });
  });
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              alt="modern living room"
              className="h-72 w-full rounded-lg object-cover lg:h-auto border border-secondary"
              height={400}
              src="/images/modern-living-room.webp"
              width={400}
            />
            <Card className="lg:col-span-2 flex items-center justify-center p-6 rounded-lg border-secondary">
              <div className="relative flex flex-col gap-4">
                <svg
                  className="absolute rotate-180 -top-8 -left-10"
                  height="100px"
                  viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" xmlSpace="preserve"
                >
                  <path className="fill-secondary/20" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 19.0632,27.36C 24.0825,29.3708 26.8692,34.0575 26.9167,41.1667L 20.5833,41.1667L 20.5833,53.8333L 34.8334,53.8333L 34.8334,42.0533C 34.8334,38.7442 34.0575,35.5062 33.6459,33.0679C 33.2342,30.6296 32.1536,29.7706 30.404,27.3244C 28.6544,24.8781 25.9667,22.8633 22.3409,21.28L 19.0632,27.36 Z M 41.23,27.36C 46.2017,29.3708 48.9884,34.0575 49.0834,41.1667L 42.75,41.1667L 42.75,53.8333L 57,53.8333L 57,42.0533C 57,38.7442 56.2242,35.5062 55.8125,33.0679C 55.4009,30.6296 54.3361,29.7706 52.6181,27.3244C 50.9002,24.8781 48.1967,22.8633 44.5075,21.28L 41.23,27.36 Z "/>
                </svg>
                <q
                  className="text-xl font-medium lg:text-3xl before:hidden"
                  ref={mainQuoteRef}
                >
                  {mainTestimonial.message}
                </q>
                <svg
                  className="absolute -right-10 bottom-6"
                  height="100px"
                  viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" xmlSpace="preserve"
                >
                  <path className="fill-secondary/20" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 19.0632,27.36C 24.0825,29.3708 26.8692,34.0575 26.9167,41.1667L 20.5833,41.1667L 20.5833,53.8333L 34.8334,53.8333L 34.8334,42.0533C 34.8334,38.7442 34.0575,35.5062 33.6459,33.0679C 33.2342,30.6296 32.1536,29.7706 30.404,27.3244C 28.6544,24.8781 25.9667,22.8633 22.3409,21.28L 19.0632,27.36 Z M 41.23,27.36C 46.2017,29.3708 48.9884,34.0575 49.0834,41.1667L 42.75,41.1667L 42.75,53.8333L 57,53.8333L 57,42.0533C 57,38.7442 56.2242,35.5062 55.8125,33.0679C 55.4009,30.6296 54.3361,29.7706 52.6181,27.3244C 50.9002,24.8781 48.1967,22.8633 44.5075,21.28L 41.23,27.36 Z "/>
                </svg>
                <div className="flex gap-4 leading-5">
                  <Avatar className="ring-input size-8 rounded-full ring-1">
                    <AvatarImage
                      alt={mainTestimonial.image.alt}
                      className="dark:invert"
                      src={mainTestimonial.image.src}
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{mainTestimonial.name}</p>
                    <p className="text-muted-foreground">
                      {mainTestimonial.profession}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {secondaryTestimonials.map((testimonial, index) => {
              return (
                <Card className="rounded-lg border-secondary" key={index}>
                  <CardContent className="text-foreground/70 px-6 pt-6 leading-7">
                    <q>
                      {testimonial.message}
                    </q>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4 leading-5">
                      <Avatar className="ring-input size-8 rounded-full ring-1">
                        <AvatarImage
                          alt={testimonial.image.alt}
                          className="dark:invert"
                          src={testimonial.image.src}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

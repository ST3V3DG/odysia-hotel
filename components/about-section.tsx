"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const blocks = [
  {
    title: "An Invitation to Adventure",
    paragraphs: [
      "Born from a passion for the untamed, our hotel is a gateway to the extraordinary. We believe true luxury lies in the richness of experience, curated by a team of seasoned explorers and local guides dedicated to making your stay unforgettable. Your adventure is our mission, and we are your trusted companions on the journey.",
      "From the moment you arrive, our adventure concierges are at your service to tailor a bespoke itinerary. Whether you seek the adrenaline of a mountain peak or the serenity of a hidden waterfall, we provide the keys to unlock a world of unique experiences. We invite you to disconnect from the everyday and reconnect with the spirit of discovery.",
      "This is more than a vacation; it's a narrative waiting to be written, with you as the protagonist. We handle the logistics so you can immerse yourself in the story, creating memories that are as vivid and lasting as the landscapes you explore. Your journey into the wild begins here.",
    ],
    image: {
      alt: "A view from a balcony overlooking a mountain range at sunrise",
      src: "/images/contemporary-luxurious-house.webp",
    },
  },
  {
    title: "Luxury in the Wild",
    paragraphs: [
      "In the heart of the wilderness, we have built a sanctuary that respects its environment. Our commitment to sustainability is as deep as our love for the landscapes that surround us. Here, true luxury and untouched nature exist in a perfect, symbiotic harmony.",
      "Experience a level of comfort that enhances, rather than compromises, your adventure. Our eco-conscious design utilizes natural materials and renewable energy, minimizing our footprint while maximizing your connection to the environment. Our suites provide a perfect, restorative basecamp for the modern explorer.",
      "Indulge in farm-to-table dining that celebrates local flavors, rejuvenate in a spa that draws its remedies from the earth, and rest in spaces that blur the line between indoors and out. This is responsible luxury, a way to enjoy the world's wonders while helping to preserve them for generations to come.",
    ],
    image: {
      alt: "A modern, minimalist bedroom with a large window showing a forest",
      src: "/images/modern-bedroom-interior.webp",
    },
  },
];

function isEven(number: number) {
  return number % 2 === 0;
}

export default function AboutSection() {
  
  const aboutSectionRef = useRef(null);
  const q = gsap.utils.selector(aboutSectionRef);
  let matchMedia = gsap.matchMedia();
  
  useGSAP(() => {
    matchMedia.add("(width < 48rem)", () => {
      gsap.to(q(".about-block"), {
        xPercent: (-100 * (q(".about-block").length - 1)) - 8,
        scrollTrigger: {
          trigger: q("div"),
          pin: true,
          scrub: 1,
        }
      });
    });
    
    matchMedia.add("(width >= 48rem)", () => {
      q(".about-title-block").forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          endTrigger: q(".about-paragraphs-block")[index],
          pin: true,
          scrub: 1,
          start: "bottom 60%",
          end: "bottom 60%",
        });
      });
      
      q(".about-paragraphs-block p").forEach((element) => {
        
        SplitText.create(element, {
          type: "lines, words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.words, {
              opacity: 0.2,
              stagger: 0.05,
              scrollTrigger: {
                trigger: element,
                endTrigger: element,
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
              }
            });
          }
        });
      });
    });
  }, { scope: aboutSectionRef });

  return (
    <section className="min-h-screen overflow-y-hidden pt-28" id="about-section" ref={aboutSectionRef}>
      <div className="mx-auto min-h-screen rounded-lg md:max-w-5xl py-16 md:pt-0 md:px-6 flex justify-start md:flex-col md:gap-12 gap-4 md:*:not-last:border-b md:*:not-last:border-secondary md:*:not-last:pb-4 md:relative md:before:absolute before:bg-secondary md:before:h-[calc(100%+120px)] md:before:w-[0.5px] md:before:-top-30 md:before:left-1/2">
        {blocks.map((block, index) => {
          return (
            <div
              className="grid md:grid-cols-2 w-full shrink-0 md:gap-16 items-start about-block overflow-y-hidden"
              key={index}
            >
              <div className={`about-title-block items-center size-full md:h-auto grid md:flex md:flex-col justify-start gap-8 col-start-1 row-start-1 ${ isEven(index) ? "md:items-end" : "md:col-start-2 md:items-start" }`}>
                <h3 className="about-title text-center font-semibold max-md:self-start mt-16 md:mt-0 text-2xl col-start-1 row-start-1">
                  {block.title}
                </h3>
                <Image
                  alt={block.image.alt}
                  className="object-cover md:aspect-video size-full mx-l rounded-lg col-start-1 row-start-1 -z-1"
                  height={400}
                  src={block.image.src}
                  width={400}
                />
              </div>
              <div className="about-paragraphs-block h-full max-md:col-start-1 max-md:row-start-1 p-4 md:p-0 max-md:text-white max-md:bg-black/40 rounded-lg flex flex-col place-content-center">
                {block.paragraphs.map((paragraph, index) => {
                  return (
                    <p className="not-last:mb-4 text-lg" key={index}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

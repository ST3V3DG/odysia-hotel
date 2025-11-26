"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const images = [
  {
    alt: "contemporary luxurious house",
    src: "/images/contemporary-luxurious-house.webp",
  },
  {
    alt: "modern bedroom interior",
    src: "/images/modern-bedroom-interior.webp",
  },
]

const features = [
  "contemporary luxurious house",
  "modern bedroom interior",
  "contemporary luxurious house",
  "modern bedroom interior",
]

export default function FeatureSection() {
  useGSAP(() => {
    gsap.from(".feature-image", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".feature-image",
        start: "top 90%",
        end: "bottom 85%",
        scrub: 1,
      }
    });
    gsap.from(".feature", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".feature-image",
        start: "top 95%",
        end: "bottom 85%",
        scrub: 1,
      }
    });
  });
  
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6 flex gap-8 flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-center font-semibold text-3xl">
            Signature Experiences
          </h2>
          <p className="mb-8 text-center md:text-start">
            Our curated adventures are designed to immerse you in the extraordinary. From serene explorations to thrilling expeditions, every moment is crafted for discovery.
          </p>
          <ul className="flex flex-col gap-2 justify-between">
            {
              [
                "Guided Mountain Treks",
                "Wilderness Wellness & Spa",
                "Local Culinary Expeditions",
                "Starlit Desert Dinners",
              ].map((feature, index) => {
                return (
                  <li className="feature flex items-center gap-2" key={index}><CheckCircle className="size-4 text-green-500" />{feature}</li>
                );
              })
            }
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:*:h-4/5">
          {
            images.map((image, index) => {
              return(
                <div className={ index === 0 ? "self-start" : "self-end"} key={index}>
                  <Image alt={image.alt} className="feature-image object-cover size-full rounded-lg aspect-video" height={400} src={image.src} width={400}/>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}
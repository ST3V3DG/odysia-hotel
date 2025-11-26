"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline();
    let splitHeroSpan1 = SplitText.create("#hero h1 > span", {
      autoSplit: true,
      type: "lines, words",
    });
    let splitHeroSpan2 = SplitText.create("#hero h1 > span:nth-child(2)", {
      autoSplit: true,
      type: "lines, words",
    });

    tl.from(".hero-grid", {
      scale: 0.1,
      duration: 2,
      ease: "power3.inOut",
    })
    .from(splitHeroSpan1.words, {
      y: 50,
      opacity: 0,
    })
    .from(splitHeroSpan2.words, {
      y: 100,
      duration: 1,
      autoAlpha: 0,
      stagger: 0.2,
      ease: "power3.inOut",
    },
    "<0.2")
    .from("#hero p", {
      opacity: 0,
      duration: 1,
    })
    .from("#hero > div:last-child > div > div > div:first-child div:has(button)", {
      opacity: 0,
      duration: 1,
    },
    "<")
    .from("#hero > div:last-child > div > div > div:last-child", {
      opacity: 0,
      duration: 1,
    },
    "<")
    .to("#hero > div:last-child > div > div", {
      y: -100,
      scrollTrigger: {
        trigger: "#hero",
        endTrigger: "#hero",
        scrub: 1,
        start: "bottom 99%",
        end: "bottom 80%",
      },
    })
    .to("#hero img", {
      y: -200,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom 95%",
        end: "bottom center",
        scrub: 1,
      },
    })
    .to(splitHeroSpan1.lines, {
      y: -50,
      autoAlpha: 0,
      stagger: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom 95%",
        end: "bottom 99%",
        scrub: 1,
      },
    })
    .to(splitHeroSpan2.lines, {
      y: -100,
      autoAlpha: 0,
      stagger: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom 95%",
        end: "bottom 85%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="px-1 md:px-6" id="hero">
      <div className="hero-grid grid justify-center rounded-lg overflow-hidden h-[calc(100dvh-80px)]">
        <div className="w-full h-[calc(100%+200px)] col-start-1 row-start-1 -z-1">
          <Image
            alt="Hero image"
            className="size-full object-cover"
            height={1000}
            src="/images/home.webp"
            width={1000}
          />
        </div>
        <div className="px-4 xl:px-0 bg-black/40 h-[calc(100dvh-80px)] rounded-lg overflow-hidden col-start-1 row-start-1">
          <div
            className="container flex flex-col justify-end gap-6 h-full max-w-5xl mx-auto"
          >
            <div className="flex flex-col">
              <h1 className="text-white mb-4 flex flex-col items-start justify-center">
                <span
                  className=" italic font-lighter text-5xl md:text-7xl **:overflow-x-visible"
                >
                  It's time to
                </span>
                <span
                  className=" font-extrabold text-6xl md:text-9xl md:leading-30 tracking-tighter"
                >
                  TRY SOMTHING NEW
                </span>
              </h1>
              <p
                className="text-white/90 max-w-3xl mb-8"
              >
                Beyond luxury, beyond expectation. Your journey into unforgettable moments starts here. Discover a sanctuary where every stay is an adventure waiting to unfold.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  className="text-white rounded-xs bg-secondary/20 hover:border-white hover:bg-white hover:text-primary cursor-pointer"
                  size={"lg"}
                  variant={"outline"}
                >
                  Our Adventures
                </Button>
                <Button className="rounded-xs cursor-pointer text-white" size={"lg"}>
                  Book Your Stay
                </Button>
              </div>
            </div>
            <div className=" text-white grid grid-cols-[auto_1fr_auto] justify-center items-center gap-1 w-full">
              <div>Luxury</div>
              <div className="w-full h-0.5 shrink-0">
                <div className="bg-white/80 rounded-none h-full w-0 expand-width shrink"></div>
              </div>
              <div className="shrink-0">Journey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

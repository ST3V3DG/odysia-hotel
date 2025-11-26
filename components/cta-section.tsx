"use client";

import type { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
// import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, useGSAP);

type CTAButtonProps = {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

type CTAProps = {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTASection({
  title = "Your Next Adventure Awaits",
  buttons = [
    {
      href: "#",
      text: "Begin Your Adventure",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    const splitCTAHeading = SplitText.create("#cta h2", {
      // autoSplit: true,
      type: "chars, words",
    });
    
    gsap.from(splitCTAHeading.chars, {
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount: 0.05,
        from: "center",
      },
      scrollTrigger: {
        trigger: "#cta",
        start: "center 75%",
        end: "bottom 75%",
        toggleActions: "play complete reverse reverse",
      },
    });
    
    gsap.to("#cta div:last-child div div:last-child", {
      y: -70,
      scrollTrigger: {
        trigger: "#cta",
        start: "center 85%",
        end: "bottom 85%",
        toggleActions: "play complete reverse reverse",
      },
    })
      // .from(splitCTAHeading.chars, {
      //   opacity: 0,
      //   stagger: {
      //     amount: 0.05,
      //     from: "center",
      //   },
      //   scrollTrigger: {
      //     trigger: "#cta",
      //     start: "bottom bottom",
      //     end: "bottom 90%",
      //     toggleActions: "play complete reverse reverse",
      //     scrub: 2,
      //     markers: true,
      //   },
      // });
  });
  
  return (
    <section
      id="cta"
      className={cn("relative overflow-hidden line-b px-4 py-12 sm:py-24 border-b border-secondary bg-secondary/20", className)}>
      <div className="peer max-w-fit relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight text-secondary-foreground">
          {title}
        </h2>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                asChild
                className="rounded-xs text-white"
                key={index}
                size="lg"
                variant={button.variant || "default"}
              >
                <Link href={button.href}>
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 size-full transition-all duration-500 ease-in-out peer-hover:-translate-y-4">
        <Glow variant="bottom" />
      </div>
    </section>
  );
}

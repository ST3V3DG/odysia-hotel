"use client";

import { Bed, BedDouble, Book, Building, Crown, Menu, Phone, Ship, Trees, Waves, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from 'react';
import { ThemeToggle } from "./theme-toggle";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type MenuItem = {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

type NavbarProps = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

export default function Header({
  logo = {
    url: "#",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    alt: "logo",
    title: process.env.NEXT_PUBLIC_APP_NAME ?? "Odysia",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Categories",
      url: "#",
      items: [
        {
          title: "Single Room",
          description: "Designed for one guest, with a single bed",
          icon: <Bed className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Double Room",
          description: "A room designed for two people, best for couples",
          icon: <BedDouble className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "King Room",
          description:
            "Offers a king-size bed and ample space, catering to guests seeking a more luxurious stay",
          icon: <Crown className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Villa",
          description: "Private luxurious and spacious home",
          icon: <Building className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
      ],
    },
    {
      title: "Activies",
      url: "#",
      items: [
        {
          title: "Swimming",
          description: "Enjoy pool parties organized by the structure",
          icon: <Waves className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Cruise",
          description: "Participate to amazing cruise on the sea",
          icon: <Ship className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Hinking",
          description: "Explore and discover with experts",
          icon: <Trees className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Phone className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0 group-hover:text-white" />,
          url: "#",
        },
      ],
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#header", {
      opacity: 1,
      delay: 3.6,
    });
  });

  return (
    <header id="header" className="py-2 bg-background sticky top-0 w-full z-20 opacity-0">
      <div className="mx-auto max-w-5xl px-6">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                alt={logo.alt}
                className="size-8 dark:invert object-cover"
                height={25}
                src={logo.src}
                width={50}
              />
              <span className="text-xl font-semibold text-primary italic">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center *:text-white">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <Button asChild className={`rounded-xs border-secondary hover:bg-primary hover:text-white ${scrolled ? "text-white border" : "text-primary"}`} size="sm" variant={scrolled ? "default" : "outline"}>
              <Link href="#">Book Your Stay</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2 rounded-full overflow-hidden size-8">
              <Image
                alt={logo.alt}
                className="max-h-8 dark:invert object-cover"
                height={200}
                src={logo.src}
                width={200}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="border-none shadow-none" variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2 rounded-full overflow-hidden size-8">
                      <Image
                        alt={logo.alt}
                        className="max-h-8 dark:invert object-cover"
                        height={200}
                        src={logo.src}
                        width={200}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <ThemeToggle />
                    <Button asChild className="rounded-xs">
                      <Link href="#">Book Your Stay</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="cursor-pointer text-black dark:text-white">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground rounded-xs">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 rounded-xs">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent hover:text-white dark:text-white hover:bg-primary rounded-xs group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors text-black active:bg-primary active:text-white focus:bg-primary focus:text-white"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="hover:bg-primary hover:text-white flex min-w-74 select-none flex-row gap-4 rounded-xs p-3 leading-none no-underline outline-none transition-colors group"
      href={item.url}
    >
      <div className="text-foreground group-hover:text-white">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="group-hover:text-white text-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

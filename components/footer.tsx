import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const defaultSections = [
	{
		title: "Explore",
		links: [
			{ name: "Home", href: "#" },
			{ name: "Adventures", href: "#" },
			{ name: "The Stay", href: "#" },
			{ name: "Our Story", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", href: "#" },
			{ name: "Our Philosophy", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Press", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Help Center", href: "#" },
			{ name: "Contact Us", href: "#" },
			{ name: "Privacy", href: "#" },
		],
	},
];

const defaultSocialLinks = [
	{ icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
	{ icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
	{ icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
	{ icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
	{ name: "Terms & Conditions", href: "#" },
	{ name: "Privacy Policy", href: "#" },
];

const logo = {
	url: process.env.NEXT_PUBLIC_BASE_URL ?? "#",
	src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
	alt: "Logo",
	title: process.env.NEXT_PUBLIC_APP_NAME ?? "Odysia",
};
const sections = defaultSections;
const description = "Seek. Discover. Return. Your story is waiting to be written.";
const socialLinks = defaultSocialLinks;
const legalLinks = defaultLegalLinks;

export default function Footer() {
	return (
		<footer className="border-t border-secondary pt-12 bg-secondary/20">
			<div className="mx-auto max-w-5xl px-6">
				<div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
					<div className="flex w-full flex-col justify-between gap-6 lg:items-start">
						{/* Logo */}
						<div className="flex items-center gap-2 lg:justify-start">
							<Link className="size-8" href={logo.url}>
								<Image
									alt={logo.alt}
									className="h-8 dark:invert"
									height={50}
									src={logo.src}
									title={logo.title}
									width={50}
								/>
							</Link>
							<h2 className="font-semibold text-xl text-primary italic">{logo.title}</h2>
						</div>
						<p className="max-w-[70%] text-muted-foreground text-sm">{description}</p>
						<ul className="flex items-center space-x-6 text-muted-foreground">
							{socialLinks.map((social, index) => (
								<li className="font-medium hover:text-primary" key={index}>
									<Link aria-label={social.label} href={social.href}>
										{social.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
						{sections.map((section, index) => (
						<div key={index}>
								<h3 className="mb-4 font-bold">{section.title}</h3>
								<ul className="space-y-3 text-muted-foreground text-sm">
									{section.links.map((link, index) => (
										<li className="font-medium hover:text-primary" key={index}>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="mt-8 flex flex-col justify-between gap-4 border-t border-secondary py-8 font-medium text-muted-foreground text-xs md:flex-row md:items-center md:text-left">
					<p className="order-2 lg:order-1">
						© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BASE_URL ?? "fake.com"}
					</p>
					<ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
						{legalLinks.map((link, index) => (
							<li className="hover:text-primary" key={index}>
								<Link href={link.href}> {link.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}

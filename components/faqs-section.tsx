import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqs = [
	{
		id: "item-1",
		title: "What kind of adventures can I expect?",
		content:
			"We offer a curated selection of experiences, from serene nature walks and private culinary classes to thrilling mountain treks and kayaking expeditions. Our concierge is ready to help you craft your perfect journey.",
	},
	{
		id: "item-2",
		title: "Is the hotel suitable for families?",
		content:
			"Absolutely! We offer adventures for all ages, ensuring that every member of the family creates their own unforgettable memories. Ask about our 'Little Explorers' program for tailored family fun.",
	},
	{
		id: "item-3",
		title: "What should I pack for my stay?",
		content:
			"We recommend packing layers to adapt to changing weather, comfortable walking or hiking shoes, and of course, your sense of adventure! We provide all specialized gear for our guided activities.",
	},
	{
		id: "item-4",
		title: "Do I need to be an experienced adventurer?",
		content:
			"Not at all. Our experiences are designed for all skill levels, from novice explorers to seasoned thrill-seekers. Our expert guides will ensure your safety and comfort on any adventure you choose.",
	},
	{
		id: "item-5",
		title: "What dining options are available?",
		content:
			"Embark on a culinary expedition at our on-site restaurant, featuring locally-sourced ingredients and global flavors. We also offer unique dining experiences, like starlit desert dinners and private picnics.",
	},
	{
		id: "item-6",
		title: "How do you approach sustainability?",
		content:
			"Our philosophy is built on a deep respect for nature. We are committed to sustainable practices, from energy-efficient design to supporting local conservation efforts, ensuring the wilderness remains wild.",
	},
];

export default function FAQsSection() {
	return (
		<section className="mx-auto grid min-h-screen w-full max-w-5xl grid-cols-1 md:grid-cols-2 px-6">
			<div className="px-4 pt-12 pb-6">
				<div className="space-y-5">
					<h2 className="text-balance font-bold text-4xl md:text-6xl lg:font-black">
						Your Adventure Questions
					</h2>
					<p className="text-muted-foreground">
						Everything you need to know before you embark on your journey with us.
					</p>
					<p className="text-muted-foreground">
						{"Have more questions? "}
						<a className="text-primary hover:underline" href="#">
							Speak to an Adventure Concierge
						</a>
					</p>
				</div>
			</div>
			<div className="relative place-content-center">
				{/* vertical guide line */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 left-3 h-full w-px bg-secondary"
				/>

				<Accordion collapsible type="single">
					{faqs.map((item) => (
						<AccordionItem
							className="group relative border-b pl-5 first:border-t last:border-b border-secondary"
							key={item.id}
							value={item.id}
						>
							{/*  plus */}
							<PlusIcon
								aria-hidden="true"
								className="-bottom-[5.5px] -translate-x-1/2 pointer-events-none absolute left-[12.5px] size-2.5 text-white group-last:hidden"
							/>

							<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
								{item.title}
							</AccordionTrigger>

							<AccordionContent className="px-4 pb-4 text-muted-foreground">
								{item.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
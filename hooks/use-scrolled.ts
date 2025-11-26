import { useEffect, useState } from "react";

export default function useScrolled() {
  const [scrolled, setScrolled] = useState<boolean>(false);
 
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
	
  return { scrolled: scrolled };
}
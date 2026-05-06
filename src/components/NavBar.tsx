"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuIcon from "./ui/icons/menu";
import MobileNav from "./MobileNav";
import CloseIcon from "./ui/icons/close";
import Logo from "../../public/assets/images/Logo-3.png";
import Image from "next/image";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about-us" },
  { label: "About Founder", href: "#about-founder" },
  { label: "Contact Us", href: "#contact-us" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-60% 0px -55% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-900"
      id="home"
    >
      <div className="max-w-480 mx-auto px-[2.4rem] md:px-[4.8rem]">
        <div className="flex items-center justify-between h-28">
          <Link
            href="/"
            className="flex items-center justify-center leading-none group"
          >
            <Image
              src={Logo}
              alt="Pearls Sickle Cell Logo"
              className="w-14 md:w-16 h-auto "
            />

            <p className="font-display text-white text-[1.2rem] md:text-[1.4rem] tracking-[0.08em] uppercase ml-2 group-hover:text-gold transition-colors">
              Pearls <br /> Sickle <br /> Initiative
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-[3.2rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[1.4rem] tracking-[0.08em] uppercase font-medium transition-colors duration-300 pb-[0.4rem]
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300
                  ${
                    pathname === link.href
                      ? "text-neutral-100 after:w-full"
                      : " text-neutral-400 hover:text-cream after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-16 h-16 gap-1.5 cursor-pointer -translate-y-2 text-neutral-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <CloseIcon className="size-10" />
            ) : (
              <MenuIcon className="size-10" />
            )}
          </button>
        </div>
      </div>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}

export default NavBar;

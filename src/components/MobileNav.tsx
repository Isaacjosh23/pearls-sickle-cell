import { usePathname } from "next/navigation";
import { navLinks } from "./NavBar";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
}

function MobileNav({ isOpen }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-160 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-mahogany border-t border-neutral-50/20 px-[2.4rem] py-[2.4rem] flex flex-col gap-[0.8rem]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[1.6rem] font-medium tracking-wide py-[1.2rem] border-b border-cream/10 transition-colors duration-200 ${
              pathname === link.href
                ? "text-neutral-100"
                : "text-neutral-400 hover:text-gold"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;

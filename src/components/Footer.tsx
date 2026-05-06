"use client";

import Link from "next/link";
import { navLinks } from "./NavBar";
import EmailIcon from "./ui/icons/email";
import InstagramIcon from "./ui/icons/instagram";
import CallIcon from "./ui/icons/call";
import LocationIcon from "./ui/icons/location";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo-3.png";

function Footer() {
  return (
    <footer className="bg-neutral-900 pt-[6.4rem] pb-[3.2rem] px-[2.4rem] md:px-[4.8rem]">
      <div className="max-w-384 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4.8rem] pb-[4.8rem] border-b border-neutral-700">
          <div className="flex flex-col gap-[1.6rem]">
            <Image
              src={Logo}
              alt="Pearls Sickle Cell Logo"
              className="w-14 md:w-16 h-auto "
            />
            <p className="font-display text-[2.4rem] text-white">
              Pearls Sickle Initiative
            </p>
            <p className="font-body text-[1.4rem] leading-[1.8] text-neutral-400">
              Join us. Learn. Act. Make a difference.
            </p>
            <div className="w-16 h-[0.2rem] bg-(--color-red-500) mt-[0.8rem]" />
          </div>

          <div className="flex flex-col gap-[1.6rem]">
            <p className="font-body text-[1.2rem] tracking-[0.2em] uppercase font-semibold text-(--color-red-500)">
              Quick Links
            </p>
            <ul className="flex flex-col gap-[1.2rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[1.5rem] text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-[1.6rem]">
            <p className="font-body text-[1.2rem] tracking-[0.2em] uppercase font-semibold text-(--color-red-500)">
              Connect With Us
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pearlsicklecell_initiative01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[1.2rem] group w-fit"
            >
              <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-neutral-800 group-hover:bg-(--color-red-500) flex items-center justify-center transition-colors duration-300">
                <InstagramIcon className="size-[1.6rem] text-red-100" />
              </div>
              <span className="font-body text-[1.5rem] text-neutral-400 group-hover:text-white transition-colors duration-200">
                @pearlsicklecell_initiative01
              </span>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=Pearlscfoundation@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[1.2rem] group w-fit"
            >
              <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-neutral-800 group-hover:bg-(--color-red-500) flex items-center justify-center transition-colors duration-300">
                <EmailIcon className="size-[1.6rem] text-red-100" />
              </div>
              <span className="font-body text-[1.5rem] text-neutral-400 group-hover:text-white transition-colors duration-200">
                Pearlscfoundation@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+2349064090011"
              className="flex items-center gap-[1.2rem] group w-fit"
            >
              <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-neutral-800 group-hover:bg-(--color-red-500) flex items-center justify-center transition-colors duration-300">
                <CallIcon className="size-[1.6rem] text-red-100" />
              </div>
              <span className="font-body text-[1.5rem] text-neutral-400 group-hover:text-white transition-colors duration-200">
                +234 906 409 0011
              </span>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/CAVucvoRy4obfyMx5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-[1.2rem] group w-fit"
            >
              <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-neutral-800 group-hover:bg-(--color-red-500) flex items-center justify-center transition-colors duration-300 shrink-0">
                <LocationIcon className="size-[1.6rem] text-red-100" />
              </div>
              <span className="font-body text-[1.5rem] text-neutral-400 group-hover:text-white transition-colors duration-200 leading-[1.6]">
                Old Sawmill, 50 University Road,
                <br />
                Ilorin 240101, Kwara State, <br /> Nigeria
              </span>
            </a>
          </div>
        </div>

        <div className="pt-[3.2rem] flex flex-col md:flex-row items-center justify-between gap-[1.6rem]">
          <p className="font-body text-[1.3rem] text-neutral-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Pearls Sickle Cell Initiative. All
            rights reserved.
          </p>
          <p className="font-body text-[1.3rem] text-neutral-600 text-center md:text-right">
            Ilorin, Kwara State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

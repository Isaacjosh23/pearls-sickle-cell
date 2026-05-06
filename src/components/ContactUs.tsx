"use client";

import CallIcon from "./ui/icons/call";
import EmailIcon from "./ui/icons/email";
import InstagramIcon from "./ui/icons/instagram";
import LocationIcon from "./ui/icons/location";

function ContactUs() {
  return (
    <section
      className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-red-800"
      id="contact-us"
    >
      <div className="max-w-384 mx-auto">
        {/* Section label */}
        <p className="text-[1.2rem] tracking-[0.3em] uppercase mb-[1.6rem] text-red-100 font-semibold">
          Contact Us
        </p>

        <h2 className="font-display text-[3.2rem] md:text-[4.8rem] leading-tight text-white mb-[4.8rem]">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]">
          {/* Phone */}
          <div className="flex items-start gap-8 bg-red-900/50 rounded-xl p-[2.4rem] border border-red-700">
            <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-(--color-red-500)/20 flex items-center justify-center shrink-0">
              <CallIcon className="size-8 text-red-100" />
            </div>
            <div className="flex flex-col gap-[0.4rem] flex-1 min-w-0">
              <p className="text-[1.2rem] tracking-[0.2em] uppercase text-red-100 font-semibold">
                Phone
              </p>
              <p className="text-[1.8rem] text-white font-medium break-all">
                +234 906 409 0011
              </p>
              <a
                href="tel:+2349064090011"
                className="mt-[0.8rem] self-start text-[1.2rem] text-red-100 border border-red-600 rounded-full px-[1.6rem] py-[0.6rem] hover:bg-red-700 transition-colors"
              >
                Call us
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-8 bg-red-900/50 rounded-xl p-[2.4rem] border border-red-700">
            <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-(--color-red-500)/20 flex items-center justify-center shrink-0">
              <EmailIcon className="size-8 text-red-100" />
            </div>
            <div className="flex flex-col gap-[0.4rem] flex-1 min-w-0">
              <p className="text-[1.2rem] tracking-[0.2em] uppercase text-red-100 font-semibold">
                Email
              </p>
              <p className="text-[1.8rem] text-white font-medium break-all">
                Pearlscfoundation@gmail.com
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=Pearlscfoundation@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[0.8rem] self-start text-[1.2rem] text-red-100 border border-red-600 rounded-full px-[1.6rem] py-[0.6rem] hover:bg-red-700 transition-colors"
              >
                Send email
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-8 bg-red-900/50 rounded-xl p-[2.4rem] border border-red-700">
            <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-(--color-red-500)/20 flex items-center justify-center shrink-0">
              <InstagramIcon className="size-8 text-red-100" />
            </div>
            <div className="flex flex-col gap-[0.4rem] flex-1 min-w-0">
              <p className="text-[1.2rem] tracking-[0.2em] uppercase text-red-100 font-semibold">
                Instagram
              </p>
              <p className="text-[1.8rem] text-white font-medium break-all">
                @pearlsicklecell_initiative01
              </p>
              <a
                href="https://www.instagram.com/pearlsicklecell_initiative01/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[0.8rem] self-start text-[1.2rem] text-red-100 border border-red-600 rounded-full px-[1.6rem] py-[0.6rem] hover:bg-red-700 transition-colors"
              >
                Visit profile
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-8 bg-red-900/50 rounded-xl p-[2.4rem] border border-red-700">
            <div className="w-[4.8rem] h-[4.8rem] rounded-full bg--red-500/20 flex items-center justify-center shrink-0">
              <LocationIcon className="size-8 text-red-100" />
            </div>
            <div className="flex flex-col gap-[0.4rem] flex-1 min-w-0">
              <p className="text-[1.2rem] tracking-[0.2em] uppercase text-red-100 font-semibold">
                Address
              </p>
              <p className="text-[1.8rem] text-white font-medium leading-[1.6] wrap-break-word">
                Old Sawmill, 50 University Road,
                <br />
                Ilorin 240101, Kwara State,
                <br />
                Nigeria
              </p>
              <a
                href="https://maps.app.goo.gl/CAVucvoRy4obfyMx5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[0.8rem] self-start text-[1.2rem] text-red-100 border border-red-600 rounded-full px-[1.6rem] py-[0.6rem] hover:bg-red-700 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

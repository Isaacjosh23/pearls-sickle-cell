import AboutFounder from "@/components/AboutFounder";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero Section */}
      <Hero />
      {/* About us Section */}
      <AboutUs />
      {/* About Founder Section */}
      <AboutFounder />
      {/* Contact us Section */}
      <ContactUs />
    </main>
  );
}

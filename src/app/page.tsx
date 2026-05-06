import AboutUs from "@/components/about-us";
import AboutFounder from "@/components/about-founder";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />

      <AboutUs />

      <AboutFounder />

      <ContactUs />

      <Footer />
    </main>
  );
}

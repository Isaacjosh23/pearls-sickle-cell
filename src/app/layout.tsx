import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Pearls Sickle Cell Initiative",
  description: "Fighting sickle cell disease, together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

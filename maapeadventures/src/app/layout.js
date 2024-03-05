import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const duality = localFont({
  src: "../../public/fonts/duality.otf",
  variable: "--font-duality",
});
const interstate = localFont({
  src: "../../public/fonts/Interstate-Regular-Font.ttf",
  variable: "--font-interstate",
});
const mono = localFont({
  src: "../../public/fonts/mono.otf",
  variable: "--font-mono",
});
export const metadata = {
  title: "Maape Adventures",
  description:
    "Discover unforgettable adventures with Maape Adventures. Our expertly curated tours offer immersive experiences to destinations around the globe. From breathtaking landscapes to cultural gems, embark on journeys tailored to your interests and preferences. Explore the world with confidence, guided by our seasoned travel professionals. Start your next adventure today!",
  icons: {
    icon: ["/favicon.ico"],
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${duality.variable} ${mono.variable} font-interstate`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

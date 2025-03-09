import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "atharianr.",
  description: "A portofolio from Atharian Rahmadani, Software Developer based in Surabaya, Indonesia",
  icons: {
    icon: "/atharianr_icon.svg", // path to your favicon inside the /public folder
    shortcut: "/atharianr_icon.svg", // optional: often the same as icon
    apple: "/atharianr_icon.svg" // optional: for Apple devices (if you have it)
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

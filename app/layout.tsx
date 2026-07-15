import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Aurora from "../components/(aurora)/aurora";
import NavBar from "@/components/navBar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julia's Blog",
  description: "Uma dev contando sua trajetoria de aprendizados. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        schibstedGrotesk.variable,
        martianMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col min-h-screen">
        <NavBar />
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <Aurora
            colorStops={["#B497CF", "#cb3476", "#3d3c8a"]}
            amplitude={1}
            blend={0.5}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}

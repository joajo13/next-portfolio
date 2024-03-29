import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Providers from "./providers";
import { Aside } from "@/components/aside/aside";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className="bg-gradient-to-b from-slate-200 to-white dark:from-slate-900 dark:to-slate-700 flex mt-16 md:mt-32 transition-all duration-300">
        <Providers>
          <nav>
            <Navbar />
          </nav>

          <Aside />
          {children}
        </Providers>
      </body>
    </html>
  );
}

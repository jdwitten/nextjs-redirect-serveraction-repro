import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ComponentWithServerAction from "../_components/ComponentWithServerAction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ComponentWithServerAction />
        <div className="flex h-full min-h-full w-full flex-col items-stretch overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Providers from "@/components/providers/AntdRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aamir Mahboob – Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Web3, and blockchain analytics platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-dm antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

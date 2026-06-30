import type { Metadata } from "next";
import "../styles/globals.css";
import { anton, neueMontreal, switzer } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Muhammad Yudhi Azhari — Web Developer In Bogor",
    description: "Web Developer passionate about building modern digital experiences with Next.js, React, TypeScript, and scalable web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${neueMontreal.variable} ${switzer.variable} antialiased`}
    >
        <body>
            {children}
        </body>
    </html>
  );
}

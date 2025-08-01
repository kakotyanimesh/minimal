import type { Metadata } from "next";
import { Toaster } from 'sonner'
import "./globals.css";
import { anton, baseFont, dottedFont, UpRightFontOne } from "@/lib/font-config";


export const metadata: Metadata = {
  title: "MInimal",
  description: "Design seamless carousels and aesthetic dumps — no noise, just your vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baseFont.variable} ${dottedFont.variable} ${anton.variable} ${UpRightFontOne.variable}`}>
      <body
        className={`antialiased font-medium`}
      >
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}

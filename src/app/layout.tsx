import type { Metadata } from "next";
import { Toaster } from 'sonner'
import "./globals.css";
import { baseFont } from "@/lib/font-config";


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
    <html lang="en">
      <body
        className={`${baseFont.className} antialiased font-medium`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}

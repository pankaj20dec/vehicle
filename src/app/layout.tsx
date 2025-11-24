import { ReactNode } from "react";
import { headers } from "next/headers";
import "./globals.css";
import { Roboto } from "next/font/google";

const RobotoFont = Roboto({
  weight: '400',
  subsets: ["latin"],
})

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
 const h = await headers();
 const locale = h.get("x-locale") || "en";

  return (
    <html lang={locale} className={RobotoFont.className}> 
      <body>{children}</body>
    </html>
  );
}

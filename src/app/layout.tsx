"use client"

import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 400 700 900"
})

export default function RootLayout({
  children
}:{children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title> Visa Genie</title>
      <body
        className={`${lato.variable} antialiased`}
      >
         <nav>
          <a href="/">Home</a>
        </nav>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";


const outfit = Outfit({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
})

const ovo = Ovo({
  subsets:["latin"],
  weight:["400"]
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
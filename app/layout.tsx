import "./globals.css";
import { inter } from "./ui/fonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | CarpTravel",
    default: "CarpTravel",
  },
  description:
    "A website of a company that organizes trips to the Carpathians.",
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
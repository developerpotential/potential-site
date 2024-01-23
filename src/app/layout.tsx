import "./globals.css";
import { Nunito_Sans } from "next/font/google";

import NavBar from "@/components/NavBar";
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Potential",
  description:
    "AI that helps you find the ones who can help you reach your potential.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} flex flex-col text-[#156669] bg-gradient-to-r from-[#DBE6F5] to-[#EDE9F0]`}
      >
        {/* <NavBar /> */}

        {children}
      </body>
    </html>
  );
}

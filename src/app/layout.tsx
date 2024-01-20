import "./globals.css";
import { Nunito_Sans } from "next/font/google";

import NavBar from "@/components/NavBar";
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Career Coach",
  description:
    "A friendly chatbot that can answer questions about your career.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} flex flex-col`}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}

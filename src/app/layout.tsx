import FooterComponent from "@/components/view/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./lib/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";

export const metadata: Metadata = {
  title: "Donation",
  description: "donation webside",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          
          {children}
          
          <FooterComponent/>
        </Providers>
      </body>
    </html>
  );
}
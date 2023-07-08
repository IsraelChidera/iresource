import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iResource",
  description: "Discover and share the best place to get started with tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>

          <Navbar />
          {children}
          
        </Provider>
      </body>
    </html>
  );
}

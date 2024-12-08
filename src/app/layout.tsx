import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./component/TopBar";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty - Furniture Store",
  description: "Create by Shah86Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
       
              
      <body className={inter.className}>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
      
    </html>
    
  );
}

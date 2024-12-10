
import Head from "next/head";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";
import { use } from "react";
import FeaturedSec from "./component/FeaturedSec";
import CompanyLogos from "./component/CompanyLogos";
import TopCategories from "./component/TopCatagory";
import HotCategory from "./component/HotCategory";
import OurProducts from "./component/OurProduct";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Head>
        
        <title>Comforty - Furniture Store</title>
      </Head>
      <main>
        
        <HeroSection />
        <CompanyLogos/>
        <FeaturedSec/>
        <TopCategories/>
        <HotCategory/>
        <OurProducts/>
      </main>
      
    </>
  );
}

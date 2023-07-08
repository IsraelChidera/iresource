import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import GlobalNews from "@/components/GlobalNews";
import Header from "@/components/Header";
import Latest from "@/components/Latest";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Latest />  
      <BestSellers />
      <GlobalNews />    
      <Newsletter />
      <Footer />
    </>
  );
}

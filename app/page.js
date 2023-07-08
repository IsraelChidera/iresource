import Header from "@/components/Header";
import Latest from "@/components/Latest";
import Trending from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Latest />      
    </>
  );
}

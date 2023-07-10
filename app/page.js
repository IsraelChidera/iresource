import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import GlobalNews from "@/components/GlobalNews";
import Header from "@/components/Header";
import Latest from "@/components/Latest";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";

async function getData() {
  const baseUrl = '';
  const res = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=imPLNZGw2ijLYCl0aaU2bGkhwHWotpZE");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <Header data={data} />
      <Trending />
      <Latest />
      <BestSellers />
      <GlobalNews />
      <Newsletter />
      <Footer />
    </>
  );
}

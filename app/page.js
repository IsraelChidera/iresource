import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import GlobalNews from "@/components/GlobalNews";
import Header from "@/components/Header";
import Latest from "@/components/Latest";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";

async function getTopStories() {
  const baseUrl = "https://api.nytimes.com/svc/news/v3/content/nyt/arts.json";
  const apiKey = process.env.API_KEY;
  const res = await fetch(`${baseUrl}?api-key=${apiKey}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPopularStories() {
  const baseUrl = "https://api.nytimes.com/svc/topstories/v2/arts.json";
  const apiKey = process.env.API_KEY;
  const res = await fetch(`${baseUrl}?api-key=${apiKey}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const getMostViewedArticles = async () => {
  const baseUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json";
  const apiKey = process.env.API_KEY;
  const res = await fetch(`${baseUrl}?api-key=${apiKey}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getBestSellers = async () => {
  const baseUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json`;
  const apiKey = process.env.API_KEY;
  const res = await fetch(`${baseUrl}?api-key=${apiKey}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const data = await getTopStories();
  const frontPageData = await getPopularStories();
  const mostViewedData = await getMostViewedArticles();
  const bestSellersData = await getBestSellers();

  return (
    <>
      <Header data={data} frontPageData={frontPageData} />
      <Trending data={data} />
      <Latest data={mostViewedData} />
      <BestSellers data={bestSellersData} />
      <GlobalNews data={mostViewedData}/>
      <Newsletter />
      <Footer />
    </>
  );
}

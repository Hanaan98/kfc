
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import TopSelling from "../components/TopSelling";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <Layout>
      <Slider />
      <Categories />
      <TopSelling />
    </Layout>
  );
}

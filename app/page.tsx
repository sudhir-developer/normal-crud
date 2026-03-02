
import UserComponent from "./components/userComponent";
import ProductList from "./components/productList";
import type { Metadata } from "next";
import Throttle from "./components/throttle";
import HomeBanner from "./components/homebanner";
import New from "./components/new";
import Example from "./components/example";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page of my website",
};

export default async function Home(){
const res = await fetch("https://dummyjson.com/products", {
  next: { revalidate: 3600 },cache: "force-cache",
});
const data = await res.json();

  return (
    <main>
    <HomeBanner/>
    <ProductList products={data.products} />
    <UserComponent/>
     <New/>
     {/* <Throttle/> */}
    <Example/>
    </main>
  );
}


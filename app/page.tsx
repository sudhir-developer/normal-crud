

import HomeClient from "./HomeClient";
import { createMetadata } from "./metadata";

export const metadata = createMetadata(
  "Home Page",
  "Welcome to our homepage"
);

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 3600 },
  });

  const data = await res.json();

  return (
    <>
      <HomeClient products={data.products} />
    </>
  );
 
}


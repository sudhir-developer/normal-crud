"use client";

import Image from "next/image";
import { useLoadMore } from "./useLoadMore";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function ProductList({ products }: { products: Product[] }) {
  const { visibleCount, loadMore, hasMore } = useLoadMore(products.length, 6);

  return (
    <>
    <ul className="newcontainer">
      {products.slice(0, visibleCount).map((pro, index) => (
        <li key={pro.id}  className="productbox">
            <Image
            src={pro.images[0]}
            alt={`${pro.title} Product image`}
            width={200}
            height={200}
            fetchPriority={index === 0 ? "high" : "auto"}
            priority={index === 0}
            sizes={index === 0 ? "(max-width: 768px) 100vw, 300px" : "(max-width: 768px) 50vw, 200px"}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder={index === 0 ? "empty" : "blur"}
            blurDataURL="/small-placeholder.webp"
          />
          {index === 0 ? <h1>{pro.title}</h1> : <h2>{pro.title}</h2>}
          <p>${pro.price}</p>
        </li>
      ))}
     </ul>
      {/* loadmore button */}
      <div style={{textAlign:'center'}}>
            <button
             onClick={loadMore}
             disabled={!hasMore}
             aria-disabled={!hasMore}
             aria-label={
              hasMore
                ? "Load more products"
                : "No more products available"
            }
            style={{
                padding: "10px 20px",
                cursor: !hasMore? "not-allowed" : "pointer",
                background: !hasMore ? "#696969" : "#6a0097",
                color: "#fff",
                marginBottom:'30px',
                borderRadius:'10px'
            }}
            >
            {!hasMore? "No More" : "Load More"}
            </button>

      </div>

      </>
  );
}

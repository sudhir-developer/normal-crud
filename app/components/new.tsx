"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "./deBounce";
interface Products{
  id:number,
  name:string,
  price:number
}

export default function name() {
  const [search, setSearch]= useState("");
  const debouncedSearch = useDebounce(search,500);
  const productData:Products[] = [
    { id: 1, name: "iPhone 15", price: 6432 },
    { id: 2, name: "Samsung Galaxy S23", price: 490  },
    { id: 3, name: "MacBook Air Laptop", price: 765  },
    { id: 4, name: "Dell XPS Laptop", price: 6754  }
   ];
const searchData = useMemo(()=>{
  const query = debouncedSearch.toLowerCase();
  return productData.filter((item=>
   item.name.toLowerCase().includes(query) ||
   item.price.toString().includes(query)
 ));
},[debouncedSearch])








 return(
<>
<div className="grid grid-cols-1 gap-4 p-6">
<div className="bg-gray-100 text-black p-6">
<label htmlFor="search">Search
<input id="search" type="text" value={search} onChange={e=>setSearch(e.target.value)}
aria-label="Search"
placeholder="Search..."
 style={{fontSize:'16px', backgroundColor:'#364153', color:'#fff'}}
 className="p-2"
/>
</label>


<ul className="debouncing">
{searchData?.map((prod)=>(
 <li key={prod.id}>{prod.name} - {prod.price}</li>
))}
</ul>

<br/><hr/>
</div>
</div>
</>
 )}
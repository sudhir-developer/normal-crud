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
<div className="bg-gray-400 text-white p-6">
<input type="text" value={search} onChange={e=>setSearch(e.target.value)} style={{border:'1px solid #000'}}/>



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
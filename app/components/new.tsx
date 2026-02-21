"use client";

import { useEffect, useState } from "react";

interface Products{
  id:number,
  name:string,
  price:number
}

export default function name() {
  const [search, setSearch]= useState("");
  const [loading, setLoading] = useState(false);
  const [debounce, setDebounce] = useState("");

  const productData:Products[] = [
    { id: 1, name: "iPhone 15", price: 6432 },
    { id: 2, name: "Samsung Galaxy S23", price: 490  },
    { id: 3, name: "MacBook Air Laptop", price: 765  },
    { id: 4, name: "Dell XPS Laptop", price: 6754  }
   ];


 const searchQuery = search.toLowerCase();
 const searchData = productData.filter((item=>
  item.name.toLowerCase().includes(searchQuery) ||
  item.price.toString().includes(searchQuery)
));

useEffect(()=>{
  setLoading(true);
  const timer = setTimeout(() => {
    setDebounce(search);
    setLoading(false);
  },1500);
  return (()=>{clearTimeout(timer)})
}, [search])

/////////////////////


/////////////////////


 return(
<>
<input type="text" value={search} onChange={e=>setSearch(e.target.value)} style={{border:'1px solid #000'}}/>

{loading && <p>Loading ...</p>}

{!loading && (<>
<ul>
{searchData?.map((prod)=>(
 <li key={prod.id}>{prod.name} - {prod.price}</li>
))}
</ul>
</>
)}
<br/><hr/>

</>

 )

}
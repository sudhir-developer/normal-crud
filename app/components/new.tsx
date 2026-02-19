"use client";

import { useEffect, useState,useRef } from "react"

interface Products {
    id:number,
    name:string,
    price:number
}

export default function name() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchDbounce, setSearchDebounce] = useState("");
///////////throttle////////////
    const [isSticky, setIsSticky] = useState(false);
    const lastRun = useRef(0);
    const delay = 200;

useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();

      if (now - lastRun.current >= delay) {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }

        lastRun.current = now;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
///////////throttle////////////

    
    const productData:Products[] = [
        { id: 1, name: "iPhone 15", price: 6432 },
        { id: 2, name: "Samsung Galaxy S23", price: 490  },
        { id: 3, name: "MacBook Air Laptop", price: 765  },
        { id: 4, name: "Dell XPS Laptop", price: 6754  }
       ];

       useEffect(()=>{
        setLoading(true);
        const timer = setTimeout(() => {
            setSearchDebounce(search);
            setLoading(false);
        }, 1500);
        return (()=> clearTimeout(timer));
       },[search])

     const searchQuery = searchDbounce.toLowerCase();
     const searcData = productData.filter((item=>
        item.name.toLowerCase().includes(searchQuery) || item.price.toString().includes(searchQuery)
    ))

 return(
<>

<div style={{padding:'20px'}}>
<h2>Search Filter + Debouncing</h2>
<input type="text" onChange={e=>setSearch(e.target.value)} style={{border:'1px solid #000'}}/>

{loading && (<p>Loading...</p>)}

{!loading && <>
<ul>
    {searcData?.map((prod)=>(
        <li key={prod.id}>{prod.name}-{prod.price}</li>
    ))}
    
</ul>


<br/>

<h2>Sticky with Throttle</h2>

<div
        style={{
          position: isSticky ? "fixed" : "relative",
          top: 0,
          left:0,
          right:0,
          width: "100%",
          background: "black",
          color: "white",
          padding: "20px",
          zIndex: 1000,
          transition: "all 0.3s ease"
        }}
      >
        {isSticky ? "Sticky Header" : "Default Header"}
      </div>

      {/* Dummy Content */}
      <div style={{ height: "3000px", paddingTop: "20px" }}>
        <h2>Scroll Down 👇</h2>
      </div>
</>
}

</div>
</>

 )

}
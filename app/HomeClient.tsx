"use client";

import { useContext } from "react";
import { ThemeContext } from "./contextapi/ThemeContext";
import ProductList from "./components/productList";
import UserComponent from "./components/userComponent";
import Throttle from "./components/throttle";
import HomeBanner from "./components/homebanner";
import New from "./components/new";


export default function HomeClient({ products }:any) {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
       
      }}
    >
      <button onClick={toggleTheme} className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">Theme</button>
      <HomeBanner/>
      <ProductList products={products} />
    <UserComponent/>
     <New/>
     {/* <Throttle/> */}

      
    </div>
  );
}
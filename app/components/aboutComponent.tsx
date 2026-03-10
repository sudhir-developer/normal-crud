"use client";
import { useContext } from "react";
import { ThemeContext } from "../contextapi/ThemeContext";
import { useEffect,useState } from "react";


interface User{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}

function AboutComponent(){
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme,toggleTheme } = context;
  
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
const [visibleCount, setVisibleCount] = useState(16);

useEffect(()=>{

  const fetchData = async()=>{
    try{
    setLoading(true);
    const res= await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
    // console.log("Data===", data);
    }
    catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }
  fetchData();

},[])

function throttle(func:any, delay:number) {
  let lastCall = 0;
  return function (...args:any) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

 // Scroll listener
 useEffect(() => {
  const handleScroll = throttle(() => {
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 200;
    if (nearBottom && visibleCount < users.length) {
      setVisibleCount((prev) => prev + 4);
    }
  },100);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [visibleCount, users.length]);
// Scroll listener


const handleToggle = (id: number) => {
  setUsers((prev) =>prev.map((item) =>item.id === id? { ...item, completed: !item.completed }: item)
  );
};


    return(
       <>
      <div
    style={{
      background: theme === "dark" ? "#222" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
      minHeight: "100vh"
    }}>
  <button className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition" onClick={toggleTheme}>Theme</button>
       {loading && <p>Loading...</p>}
       {!loading && (
        <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-6">
          {users.slice(0, visibleCount).map((user) => (
            <div
              key={user.id}
              className="rounded-[30px] bg-gray-300 hover:bg-blue-400 transition text-black p-6"
            >
              {user.title} -
              <b>
                <label>
                {user.completed ? "True" : "False"}
                <input
                  type="checkbox"
                  checked={user.completed}
                  onChange={() => handleToggle(user.id)}
                />
                </label>
              </b>
            </div>
          ))}
        </div>
        </div>
      )}
      </div>
       </>
    )
   
   }
   
   export default AboutComponent;
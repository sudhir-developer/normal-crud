"use client";

import { useEffect,useState } from "react";

interface User{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}

function AboutPage(){

const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(false);

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

const handleToggle = (id: number) => {
  setUsers((prev) =>prev.map((item) =>item.id === id? { ...item, completed: !item.completed }: item)
  );
};


    return(
       <>
       {loading && <p>Loading...</p>}
       {!loading && <>
       <ul>
       {users?.map((user)=>(
           <li key={user.id}>{user.title}-<b>{user.completed? "True":"False"} <input type="checkbox" checked={user.completed} onChange={() => handleToggle(user.id)}/></b></li>
       ))}
      </ul>
      </>
      }
       </>
    )
   
   }
   
   export default AboutPage;
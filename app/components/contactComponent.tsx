"use client";
import { useState } from "react"
interface Userdetails{
    id:number,
    title:string,
    completed:boolean,
}
export default function ContactComponent({userDetail}:{userDetail:Userdetails[]}){
const [visible, setVisible] = useState(10);

const loadHandler = ()=>{
    setVisible(prev=>prev +10);
}


   return(
    <>
    <div className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-3  gap-6">
        {userDetail?.slice(0, visible).map((user)=>(
            <div key={user.id}>{user.title}- 
            <input type="radio" checked={user.completed} readOnly/>
            </div>
        ))}  
   </div>


   {visible >= userDetail.length? 
   (
    <button onClick={loadHandler} disabled={visible >= userDetail.length} className="mt-4 bg-gray-400 cursor-not-allowed text-white px-4 py-2 w-[156] mx-auto">
    No More
    </button>
    ):
    (
    <button onClick={loadHandler} disabled={visible >= userDetail.length} className="mt-4 bg-blue-500 text-white px-4 py-2 w-[156] mx-auto">
      Load More
    </button>
   )}
    </>
   )
}
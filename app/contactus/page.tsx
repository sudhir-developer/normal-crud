import ContactComponent from "../components/contactComponent";
import { createMetadata } from "../metadata";
export const metadata = createMetadata(
  "Contact Us",
  "Welcome to our Contact Us"
);
export default async function Contactus(){
 
const res = await fetch("https://jsonplaceholder.typicode.com/todos");
 const data = await res.json();

    
     return(
        <>
       <div className="container mx-auto">
           <div className="grid grid-cols-1 sm:grid-cols1 md:grid-cols1 lg:grid-cols1 p-6">
           <h1>Contact Page</h1>
           <ContactComponent userDetail={data} />
       </div>
       </div>
       </>
       )
}
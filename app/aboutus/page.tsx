

import { keyboard } from "@testing-library/user-event/dist/cjs/setup/directApi.js";
import AboutComponent from "../components/aboutComponent";
import { createMetadata } from "../metadata";

export const metadata = createMetadata(
  "About Page",
  "Welcome to our About"
);

function AboutPage(){
 keyboard
    return(
       <>
     <AboutComponent/>
       </>
    )
   
   }
   
   export default AboutPage;
import ChartComponent from "../components/chart/chart";
import { createMetadata } from "../metadata";

export const metadata = createMetadata(
  "Chart Page",
  "Welcome to our Chart"
);


export default async function Chart(){
    return(
       <div>
       <ChartComponent/>
       </div>
    )
}
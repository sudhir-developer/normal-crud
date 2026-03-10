"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  
  import { Bar , Line, Doughnut} from "react-chartjs-2";

  
  ChartJS.register(
    CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
  );



export default function ChartComponent(){
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Sales",
            data: [12, 19, 8, 15, 10],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
        },
      };


      const linedata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Website Visitors",
            data: [120, 190, 170, 220, 210, 260],
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75,192,192,0.2)",
            tension: 0.4
          }
        ]
      };
    
      const lineoptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const
          },
          title: {
            display: true,
            text: "Monthly Visitors"
          }
        }
      };

      const doughnutData = {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [
          {
            label: "Users by Device",
            data: [55, 30, 15],
            backgroundColor: [
              "#36A2EB",
              "#FF6384",
              "#FFCE56"
            ],
            borderWidth: 1,
          },
        ],
      };
      const doughnutOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
          title: {
            display: true,
            text: "Device Usage",
          },
        },
      };
    return(
        <>
        <div className="grid md:grid-cols-3 gap-8 p-10">

<div className="bg-white p-6 rounded-xl shadow">
  <Bar data={data} options={options} />
</div>

<div className="bg-white p-6 rounded-xl shadow">
  <Line data={linedata} options={lineoptions} />
</div>

<div className="bg-white p-6 rounded-xl shadow">
  <Doughnut data={doughnutData} options={doughnutOptions} />
</div>

</div>
        </>
    )
}
"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function DthreeChartComponent(){
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const data = [10, 25, 15, 30, 20];
      
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
      
        const svg = d3
          .select(svgRef.current)
          .attr("width", width)
          .attr("height", height);
      
        svg.selectAll("*").remove(); // clear old chart
      
        const chart = svg
          .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);
      
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;
      
        const xScale = d3
          .scaleBand()
          .domain(data.map((_, i) => i.toString()))
          .range([0, chartWidth])
          .padding(0.2);
      
        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(data)!])
          .nice()
          .range([chartHeight, 0]);
      
        chart
          .selectAll("rect")
          .data(data)
          .join("rect")
          .attr("x", (_, i) => xScale(i.toString())!)
          .attr("y", d => yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", d => chartHeight - yScale(d))
          .attr("fill", "steelblue");
      
        // X Axis
        chart
          .append("g")
          .attr("transform", `translate(0, ${chartHeight})`)
          .call(d3.axisBottom(xScale));
      
        // Y Axis
        chart
          .append("g")
          .call(d3.axisLeft(yScale));
      
      }, []);
    return(
        <>
         <div className="grid md:grid-cols-3 gap-8 p-10">
            <div className="bg-white p-6 rounded-xl shadow">
                    <h1>D3 chart</h1>
                    <svg ref={svgRef}></svg>
             </div>
        </div>
        </>
    )
}
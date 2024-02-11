"use client"
//import "./styles.css";
import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();



const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PieChartsPage({session,posts}:{session:any,posts:any}) {
  console.log(posts)
  const datas = posts?.data?.map((p:any) => p?.price || 0);
const sum = datas?.reduce((accumulator:any, currentValue:any) => accumulator + parseFloat(currentValue), 0);
  console.log(sum)
 

const emailPriceMap = new Map();

// Iterate over each post
const userPost= posts?.data?.forEach((post:any) => {
  const email = post?.userInfo?.userEmail;
  const price = parseFloat(post?.price) || 0; // Assuming price is a string representing a number
  
  // Update sum for the email
  if (email) {
    if (emailPriceMap.has(email)) {
      // If email exists in map, add price to existing sum
      emailPriceMap.set(email, emailPriceMap.get(email) + price);
    } else {
      // If email doesn't exist in map, initialize sum with price
      emailPriceMap.set(email, price);
    }
  }
});
console.log(userPost)
const dataofStatistic: {
  name: any;
  uv: any;
  pv: 2400;
  amt: 2400;
}[] = [];
emailPriceMap.forEach((sum, email) => {
  dataofStatistic.push({ name:email, uv: sum,pv:2400,amt:2400 });
});

console.log('Data:', dataofStatistic);

 const data= dataofStatistic;

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
    <BarChart
      width={1200}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data?.map((entry:any, index:any) => (
          <>
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
           
           </>
        ))}
      </Bar>
    </BarChart>
    </div>
    <div>
      {data.map((v:any,i:any)=>(
        <div key={i}>
          <div style={{display:"flex",gap:"45px",marginBottom:"8px",justifyContent:"center"}}>
          <h4 style={{color:"navy"}}>User:{` `}{v.name}</h4>
          <h4 style={{color:"yellowgreen"}}>Total Donation:{` `}{v.uv}</h4>
          </div>
          
        </div>
      ))}
    </div>
   {/* <div style={{color:"black"}}>User Email:{data.map((d:any)=>d.name )}</div>
   <div style={{color:"black"}}>User Total donation amount:{data.map((p:any)=>p.uv )}</div> */}
    </>
  );
}

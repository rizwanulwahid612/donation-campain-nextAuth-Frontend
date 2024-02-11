"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function LineChatPage({posts2}:{posts2: any}) {
   const dataPrice = posts2?.data?.map((p:any) => parseFloat(p?.price) || 0);
   console.log(dataPrice)
   const datacategory = posts2?.data?.map((p:any) =>p?.category);
   console.log(datacategory)
   const datas = posts2?.data?.map((p:any) => p?.price || 0);
const sum = datas?.reduce((accumulator:any, currentValue:any) => accumulator + parseFloat(currentValue), 0);
  console.log(sum)
 
const dataofStatistic = [];

// Iterate over dataPrice and datacategory arrays simultaneously
for (let i = 0; i < Math.min(dataPrice.length, datacategory.length); i++) {
  dataofStatistic.push({
    name: datacategory[i],
    uv: dataPrice[i],
    pv: 0,
    amt: sum
  });
}

console.log('Data:', dataofStatistic);

  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center",margin:"50px"}}>Donation Category and Amount Chart</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
    <LineChart
      width={1200}
      height={600}
      data={dataofStatistic}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
    <div>
      {dataofStatistic.map((v:any,i:any)=>(
        <div key={i}>
          <div style={{display:"flex",gap:"45px",marginBottom:"8px",justifyContent:"center"}}>
          <h4 style={{color:"navy"}}>Category:{` `}{v?.name}</h4>
          <h4 style={{color:"yellowgreen"}}>Amount:{` `}{v?.uv}</h4>
          </div>
          
        </div>
      ))}
    </div>
    </div>
  );
}

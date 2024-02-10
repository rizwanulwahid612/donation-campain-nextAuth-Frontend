"use client"

import { useUsersQuery } from "@/redux/api/usersApi"
import { Card, Col, Rate, Row } from "antd"
import Meta from "antd/es/card/Meta"
import Image from "next/image"

const UserDashboardPage = ({posts ,session}:{posts:any,session:any}) => {
    //const query: Record<string, any> = {};
    // const {data:userss,isLoading}=useUsersQuery({...query})

// const userdata: any = userss?.data?.map((dam:any) => {
//   if (dam?.email === session.email) {
//     return dam;
//   }
// }).filter(Boolean);
console.log(posts)
 const post2=posts?.data?.map((p:any)=>{
    if(p?.userInfo?.userEmail===session?.email){
        return p
    }
 }).filter(Boolean);
 console.log(post2.map((p:any)=>p))
  return (
        <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

  {
      
      post2?.map((categorydata:any,i:any)=>(
             <Col xs={24} sm={24} md={12} lg={6}  span={8} key={categorydata?.d} style={{ marginBottom: "20px" }}>
              
                 
               <Card
                 title={''}
                 hoverable
                 
                 cover={<Image alt="example" src={categorydata?.image} width={420} height={300} /> }
               >
               
                 <Meta title={categorydata?.name} />
                 <p>Name:{categorydata?.name}</p><p>Price:{categorydata?.price}</p>Location:<p>{categorydata?.location}</p><p>Details:{categorydata?.details}</p>Start Time:<p>{categorydata?.startTime}</p><p>End Time:{categorydata?.endTime}</p>
                 <p>appointmentdaysInWeek:{categorydata?.apointmentdaysInWeek}</p>
                 <p>Categories:{categorydata?.categoryIds?.map((c:any,i:any)=>(<div key={i}><p>{c?.name}</p></div>))}</p>
                 <Rate allowHalf defaultValue={4.5} />
                 
               </Card>
               
             </Col>
           ))}
        </Row>
        </div>
  )
}

export default UserDashboardPage
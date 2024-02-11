"use client"

import { Card, Col, Rate, Row } from "antd"
import Meta from "antd/es/card/Meta"
import Image from "next/image"
import Link from "next/link"

const User = ({posts,session}:{posts:any,session:any}) => {
    const userdata: any = posts?.data?.map((dam:any) => {
  if (dam?.email === session) {
    return dam;
  }
}).filter(Boolean);
console.log(userdata)
  return (
         <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

  {
   
      userdata?.map((categorydata:any,i:any)=>(
             <Col xs={24} sm={24} md={24} lg={24}  span={8} key={categorydata?.d} style={{ marginBottom: "20px" }}>
             
                 
               <Card
                 title={''}
                 hoverable
                 
                 cover={<Image alt="example" src={categorydata?.image} width={320} height={700} /> }
               >
               
                 <Meta title={categorydata?.name} />
                 <p>Name:{categorydata?.name}</p>
                 <p>Email:{categorydata?.email}</p>
                 <p>Role:{categorydata?.role}</p>
                
                 
               </Card>
               {/* </Link> */}
             </Col>
           ))}
        </Row>
        </div>
  )
}

export default User
"use client"

import { Card, Col, Rate, Row } from "antd"
import Meta from "antd/es/card/Meta"
import Image from "next/image"
import Link from "next/link"

const Admin = ({posts,session}:{posts:any,session:any}) => {
    const userdata: any = posts?.data?.map((dam:any) => {
  if (dam?.email === session) {
    return dam;
  }
}).filter(Boolean);
console.log(userdata.map((usr:any)=>usr.email))
  return (
         <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

  {
   
      userdata?.map((categorydata:any,i:any)=>(
             <Col xs={24} sm={24} md={24} lg={24}  span={8} key={categorydata?.d} style={{ marginBottom: "20px" }}>
              {/* <Link key={''} href={`category/service/services/${categorydata?._id}`}> */}
                   {/* <Button>Go to Service</Button> */}
                 
               <Card
                 title={''}
                 hoverable
                 
                 cover={<Image alt="example" src={categorydata?.image} width={600} height={400} /> }
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

export default Admin
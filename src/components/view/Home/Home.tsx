
"use client"
import ActionBar from "@/components/ui/ActionBar/ActionBar";
import { Card, Col, Input, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Homepage = async({posts}:{posts:any}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    //const session = await getServerSession(authOptions);
  //console.log( "session:",session);
   
   // console.log(posts?.data)
   const catData = posts?.data?.map((d:any)=>d)
  console.log("gfsghfppppp",catData)
   //console.log("meta:",cartMeta)

 // const name=searchParams['name'] ?? ''

  const entries= catData
  return (
    // <div>{posts?.data?.length}</div>

    <div>
  <ActionBar title="Service List">
     
         <Input
          id="searchInput"
          type="text"
           size="large"
           placeholder="Search"
           onChange={(e) => setSearchTerm(e.target.value)}
           style={{
             width: '20%',
           }}
         />
      </ActionBar>   
      
            <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

  {
      entries.filter((categorydata:any)=>{
        if(searchTerm ==""){
           return categorydata;
        }else if(categorydata.category.toLowerCase().includes(searchTerm.toLowerCase())){
          return categorydata
        }
      })
      .map((categorydata:any,i:any)=>(
             <Col xs={24} sm={24} md={12} lg={6}  span={8} key={categorydata?.d} style={{ marginBottom: "20px" }}>
              <Link key={''} href={`category/service/services/${categorydata?._id}`}>
                   {/* <Button>Go to Service</Button> */}
                 
               <Card
                 title={''}
                 hoverable
                 
                 cover={<Image alt="example" src={categorydata?.profileImage} width={420} height={300} /> }
               >
               
                 <Meta title={categorydata?.name} />
                 <p>Name:{categorydata?.name}</p><p>Price:{categorydata?.price}</p>Location:<p>{categorydata?.location}</p><p>Details:{categorydata?.details}</p>Start Time:<p>{categorydata?.startTime}</p><p>End Time:{categorydata?.endTime}</p>
                 <p>appointmentdaysInWeek:{categorydata?.apointmentdaysInWeek}</p>
                 <p>Categories:{categorydata?.categoryIds?.map((c:any,i:any)=>(<div key={i}><p>{c?.name}</p></div>))}</p>
                 <Rate allowHalf defaultValue={4.5} />
                 
               </Card>
               </Link>
             </Col>
           ))}
        </Row>
        </div>


        </div>


  )
}
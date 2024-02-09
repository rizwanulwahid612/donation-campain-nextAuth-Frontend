
"use client"
import ActionBar from "@/components/ui/ActionBar/ActionBar";
import { Button, Card, Col, Input, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDebounced } from "../Debounced/Debounced";
import { ReloadOutlined } from "@ant-design/icons";
import { useDonationsQuery } from "@/redux/api/donationApi";

export const PublicHomepage = ({session}:{session:any}) => {
     const query: Record<string, any> = {};
     const {data,isLoading}= useDonationsQuery({query})
    
     console.log("datas",data)
    const [searchTerm, setSearchTerm] = useState<string>('');
    //const session = await getServerSession(authOptions);
  //console.log( "session:",session);
  
   const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
   if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
   const resetFilters = () => {
   
     setSearchTerm('');
   };
    if(isLoading){
      return <div>Loading...</div>
     }
   // console.log(posts?.data)
  // const catData = posts
//   console.log("gfsghfppppp",catData)
//    console.log("meta:",catData)

//  // const name=searchParams['name'] ?? ''

   //const entries= data?.data
  return (
    

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
        
         <div>
           {( !!searchTerm) && (
             <Button
               style={{ margin: '0px 5px' }}
               type="primary"
               onClick={resetFilters}
             >
               <ReloadOutlined />
             </Button>
           )}
         </div>
      </ActionBar>   
      
            <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

  {
      data?.data?.filter((categorydata:any)=>{
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
// "use client"
// import Link from "next/link";
// //import { useEffect } from "react";

// export const PublicHomepage = async() => {
//     //const session = await getServerSession(authOptions);
//   //console.log( "session:",session);
//     const res = await fetch("http://localhost:5000/api/v1/donations", {
//         next: {
//             revalidate: 5,
//         }
//     });
//     const posts = await res.json();
//    // console.log(posts?.data)
//    //useEffect(()=>{},[])
//   return (
//     <div>
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 {posts?.data?.map((p:any, i:any) => <div key={i} className="card-body">
//                     <h2 className="card-title">{p?.title}</h2>
//                     <p>{p?.productName}</p>
//                     <p>{p?.description}</p>
//                     <div className="card-actions justify-end">
//                         <Link href={`/posts/${p?.id}`}> <button className="btn btn-primary">Buy Now</button></Link>
//                     </div>
//                 </div>)}

//             </div>


//         </div>
//   )
// }
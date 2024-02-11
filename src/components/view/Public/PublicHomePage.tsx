
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
    const [showAll, setShowAll] = useState(false);
     console.log("datas",data)
    const [searchTerm, setSearchTerm] = useState<string>('');
    //const session = await getServerSession(authOptions);
  //console.log( "session:",session);
  const catData = data
   const colors = getRandomLightColors(catData?.data?.length);
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
  <ActionBar title="Donation List">
     
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
      
          <div style={{ margin: "20px" }}>
      <Row gutter={6} style={{ margin: 0 }}>
        {catData?.data
          ?.filter((categorydata:any) => {
            if (searchTerm === "") {
              return categorydata;
            } else if (categorydata.category.toLowerCase().includes(searchTerm.toLowerCase())) {
              return categorydata;
            }
          })
          .slice(0, showAll ? catData.data.length : 4) // Display only 4 items initially, or all items when "See More" is clicked
          .map((categorydata:any, i:any) => (
            <Col xs={24} sm={24} md={12} lg={6} span={8} key={categorydata?.d} style={{ marginBottom: "20px" }}>
              <Card
                title={''}
                hoverable
                cover={<Image alt="example" src={categorydata?.image} width={420} height={300} />}
                style={{ backgroundColor: colors[i] }} // Apply random background color
              >
                <Meta title={categorydata?.name} />
                <p>Name: {categorydata?.name}</p>
                <p>Price: {categorydata?.price}</p>
                <p>Location: {categorydata?.location}</p>
                <p>Details: {categorydata?.details}</p>
                <p>Start Time: {categorydata?.startTime}</p>
                <p>End Time: {categorydata?.endTime}</p>
                <p>Appointment days In Week: {categorydata?.apointmentdaysInWeek}</p>
                <p>Categories: {categorydata?.categoryIds?.map((c:any, i:any) => (<div key={i}><p>{c?.name}</p></div>))}</p>
                <Rate allowHalf defaultValue={4.5} />
                <Link key={''} href={`/donationshome/${categorydata?._id}`}>
                  <Button type="primary" danger>viewDetails</Button>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
      {catData.data.length > 4 && !showAll && (
        <div style={{display:"flex",justifyContent:"center"}}>
         <Button type="primary" onClick={() => setShowAll(true)}>See All</Button>
        </div>
        
      )}
    </div>


        </div>


  )
  function getRandomLightColors(count:any) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const red = Math.floor(Math.random() * 50) + 200; // Range: 155-255 (lighter red)
    const green = Math.floor(Math.random() * 50) + 200; // Range: 155-255 (lighter green)
    const blue = Math.floor(Math.random() * 50) + 200; // Range: 155-255 (lighter blue)
    const randomColor = `rgb(${red},${green},${blue})`; // Generate random light color
    colors.push(randomColor);
  }
  return colors;
}
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

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
import donationImage from "../../../assets/78862325-group-of-volunteer-people-donate-stuff-for-charity.jpg"
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
  <ActionBar>
  <div style={{ position: "relative", width: '100%', height: 400 }}>
      <Image src={donationImage} alt="" width={600} height={600} style={{ opacity: 0.2, width: '100%' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black', fontSize: '24px' }}>
        <h2>I Grow By Helping People In Need</h2> 
      </div>
      <Input
        id="searchInput"
        type="text"
        size="large"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          zIndex: 1, // Ensure search input appears above the text
          backgroundColor: 'lighyellow', // Background color with opacity
          padding: '20px 25px', // Padding for better appearance
          borderRadius: '15px', // Rounded corners for better appearance
        }}
      />
    </div> 
       
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
      
          <div style={{ marginTop: "290px",marginBottom:"50px" }}>
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
                title={categorydata?.category}
                hoverable
                cover={<Image alt="example" src={categorydata?.image} width={420} height={300} />}
                style={{ backgroundColor: colors[i] }} // Apply random background color
              >
                 <p>Title: {categorydata?.title.length > 20 ? categorydata.title.slice(0, 20) + '...' : categorydata.title}</p>
                <p>Price: {categorydata?.price}</p>
  
                <p>Description: {categorydata?.description.length > 80 ? categorydata.description.slice(0, 185) + '...' : categorydata.description}</p>
                <Link key={''} href={`/login`}>
                  <Button type="primary" danger>viewDetails</Button>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
      {catData?.data?.length > 4 && !showAll && (
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
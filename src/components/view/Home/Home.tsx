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

export const Homepage = ({posts}:{posts:any}) => {
  const [showAll, setShowAll] = useState(false);
 //const colors = ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0']; // Define an array of colors

  const searchTerm1 = '';
     const query: Record<string, any> = {};
     const {data,isLoading}= useDonationsQuery({query})
    
     console.log("datas",data)
    const [searchTerm, setSearchTerm] = useState<string>('');
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
  
   const catData = posts
   const colors = getRandomLightColors(catData.data.length);
  return (
    

    <div>
  <ActionBar title="Donation Home">
     
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
         <Button type="primary" onClick={() => setShowAll(true)}>See More</Button>
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
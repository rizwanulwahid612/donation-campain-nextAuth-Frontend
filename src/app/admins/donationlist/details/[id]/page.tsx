"use client"

import EMBreadCrumb from '@/components/ui/EMBreadCrumb/EMBreadCumb';
import { useDonationQuery } from '@/redux/api/donationApi';
import { Button, Card, Col, Rate, Row } from 'antd';
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const { Meta } = Card;
const DetailsPage = ({ params }: any) => {
 
  const { data: donationData, isLoading: loading } = useDonationQuery(params?.id);
     console.log(donationData)
  
  return (
    <div>
      <EMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admins",
          },
        ]}
      />
     
       <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

             <Col xs={24} sm={24} md={24} lg={24}  span={8} style={{ marginBottom: "20px" }}>    
               <Card
                 title={''}
                 hoverable
                 cover={<Image alt="example" src={donationData?.data?.image} width={320} height={300} /> }
               >
                 <Meta title={donationData?.data?.title} />
                 <p>Price:{donationData?.data?.price}</p>
                 
                 <Rate allowHalf defaultValue={4.5} />
               </Card>

             </Col>
           
        </Row>
        </div>
      
      
       <div>
     
      </div>
      
      
    </div>
  );
};

export default DetailsPage;

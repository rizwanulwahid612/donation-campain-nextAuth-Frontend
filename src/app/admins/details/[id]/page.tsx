"use client"

import EMBreadCrumb from '@/components/ui/EMBreadCrumb/EMBreadCumb';
import { useDonationQuery } from '@/redux/api/donationApi';
import { Card, Col } from 'antd';
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
     
    <div>
       <h1>Donation Details</h1>
          
             <Col span={8} key={donationData?.id} style={{ margin: 0 }}>
              <Card
                
                hoverable
                style={{ width: 700, justifyContent: 'center', display: 'flex' }}
                cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={300} height={300} />}
              >
                <Meta title="Profile Information" /> 
                <div style={{display:'flex',justifyContent:'flex-end',margin:"10px"}} ></div> 
               
        
{ ` `}
{` `}
                <p>User Name: {` `}{donationData?.title}{` `}</p>
                {/* <p>Date Of Birth: {` `}{adminData?.dateOfBirth}</p>
                <p>Gender:{` `} {adminData?.gender}</p>
                <p>Blood Group: {` `}{adminData?.bloodGroup}</p>
                <p>Email: {` `}{adminData?.email}</p>
                <p>Contact No: {` `}{adminData?.contactNo}</p>
                <p>Emer.Contact: {` `}{adminData?.emergencyContactNo}</p>
                <p>Present Address: {` `}{adminData?.presentAddress}</p>
                <p>Permanent Address: {` `}{adminData?.permanentAddress}</p>
                <p>Management Department: {` `}{adminData?.managementDepartment.title}</p>
                <p>Description: {` `}{adminData?.description}</p> */}
              </Card>
            </Col>
         
     
      </div>
      
      
       <div>
     
      </div>
      
      
    </div>
  );
};

export default DetailsPage;

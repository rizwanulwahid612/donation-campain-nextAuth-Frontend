"use client"
import { useAddSingledonationpostMutation } from "@/redux/api/postdonationApi"
import { useUsersQuery } from "@/redux/api/usersApi"
import { Button, Card, Col, Rate, Row, message } from "antd"
import Meta from "antd/es/card/Meta"
import Image from "next/image"
import Link from "next/link"
   
const DonationDetails = ({singleData,session}:{singleData:any,session:any}) => {
    const query: Record<string, any> = {};
 const {data:userss,isLoading}=useUsersQuery({...query})

const userdata: any = userss?.data?.map((dam:any) => {
  if (dam?.email === session.email) {
    return dam;
  }
}).filter(Boolean);
console.log(userdata)
  const email=userdata?.map((u:any)=>u?.email).join(' ')
  const name=userdata?.map((u:any)=>u?.name).join(' ')
  const image=userdata?.map((u:any)=>u?.image).join(' ')
  console.log(email,name,image)
const [addSingledonationpost]=useAddSingledonationpostMutation();
type IUserInfo = {
  userName: string;
  userEmail: string;
  userImage: string;
};
 type IPostDonation = {
  userInfo?: IUserInfo;
  id?: string;
  title: string;
  category: string;
  image: string;
  price?: string;
  description: string;
};
    const data={     
        userName: name,
        userEmail: email,
        userImage: image,
        
        
}
//console.log("ussserrr:",userdatas)
// Join the filtered strings into a single string

//console.log(datas)
const handlegivedonation = async(id:any) => {
    try{
     const options={
      id:id,
      data,
    }
    console.log(options)
    await addSingledonationpost(options)
    //console.log("postsingle:",addSingledonationpost(options))
    message.success('Add successfully')
    }catch(error:any){
        message.error('Already Donated')
        console.log(error.message)
    }
   
  };
   
  return (
          <div style={{margin:"20px"}}>
       <Row gutter={6} style={{ margin: 0 }}>

             <Col xs={24} sm={24} md={24} lg={24}  span={8} style={{ marginBottom: "20px" }}>    
               <Card
                 title={''}
                 hoverable
                 cover={<Image alt="example" src={singleData?.image} width={320} height={300} /> }
               >
                 <Meta title={singleData?.title} />
                 <p>Name:{singleData?.name}</p><p>Price:{singleData?.price}</p>Location:<p>{singleData?.location}</p><p>Details:{singleData?.details}</p>Start Time:<p>{singleData?.startTime}</p><p>End Time:{singleData?.endTime}</p>
                 <p>appointmentdaysInWeek:{singleData?.apointmentdaysInWeek}</p>
                 <p>Categories:{singleData?.categoryIds?.map((c:any,i:any)=>(<div key={i}><p>{c?.name}</p></div>))}</p>
                 <Rate allowHalf defaultValue={4.5} />
                <Button onClick={()=>handlegivedonation(singleData?._id)} type="primary" danger>Donation: {singleData?.price}</Button>
               </Card>

             </Col>
           
        </Row>
        </div>
  )
}

export default DonationDetails
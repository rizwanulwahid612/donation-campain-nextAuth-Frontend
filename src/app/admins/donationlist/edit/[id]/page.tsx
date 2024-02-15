import UpdatePostForm from "@/components/view/DonationUpdate/DonationUpdate"

const EditDonationPage = async ({ params }:{params:any}) => {
    console.log("params:",params.id)
    const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations/${params.id}`,{
      cache:"no-store"
    })
    const postby = await res.json()
    console.log("postbyId:",postby?.data)
    const singleData= postby?.data
    // const session = await getServerSession(authOptions);
    // console.log( "session:",session);
    return (
        <>
      
        <UpdatePostForm id={params.id} singleData={singleData}/>
        </>
    )
}

export default EditDonationPage



















// "use client";

// import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
// import Form from "@/components/ui/Forms/Form";
// import FormInput from "@/components/ui/Forms/FormInput";
// import FormTextArea from "@/components/ui/Forms/FormTextArea";
// import { useDonationQuery, useUpdateDonationMutation } from "@/redux/api/donationApi";
// import { Button, Col, Row, message } from "antd";

// const EditDonationPage = ({ params }: any) => {
 
//   const { data: donationData, isLoading: loading } = useDonationQuery(params?.id);
//   //   console.log(adminData);
//   const [updateDonation] = useUpdateDonationMutation();

 
// if(loading){
//     return <div>Loading...</div>
// }
//   const onSubmit = async (values: any) => {
//     try {
//       const res = await updateDonation({ id: params?.id, body: values }).unwrap();
//        console.log(res);
//       if (res?.id) {
//         message.success("Successfully Updated!");
//       }
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };

//   const defaultValues = {
//     title:donationData?.data?.title || "",
//     category:donationData?.data?.category || "",
//     image: donationData?.data?.image || "",
//     price: donationData?.data?.price || "",
//     description: donationData?.data?.description || "",
//   };
  
//   return (
//     <div>
//       <EMBreadCrumb
//         items={[
//           {
//             label: "admin",
//             link: "/admins",
//           },
         
//         ]}
//       />
//       <h1>Edit Donation {params?.id}</h1>

//       <div>
//         <Form submitHandler={onSubmit} defaultValues={defaultValues}>
//           <div
//             style={{
//               border: "1px solid #d9d9d9",
//               borderRadius: "5px",
//               padding: "15px",
//               marginBottom: "10px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "18px",
//                 marginBottom: "10px",
//               }}
//             >
//               Donation Information
//             </p>
//             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="title"
//                   size="large"
//                   label="Title"
//                 />
//               </Col>
//                <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="category"
//                   size="large"
//                   label="Category"
//                 />
//               </Col>
           

              
           
//             </Row>
//           </div>

//           {/* basic info */}
//           <div
//             style={{
//               border: "1px solid #d9d9d9",
//               borderRadius: "5px",
//               padding: "15px",
//               marginBottom: "10px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "18px",
//                 marginBottom: "10px",
//               }}
//             >
//               Basic Information
//             </p>
//             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="image"
//                   size="large"
//                   label="Image url"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="price"
//                   size="large"
//                   label="Price"
//                 />
//               </Col>
             
              
            
             
//               <Col span={12} style={{ margin: "10px 0" }}>
//                 <FormTextArea
//                   name="description"
//                   label="Description"
//                   rows={4}
//                 />
//               </Col>

            
//             </Row>
//           </div>
//           <Button htmlType="submit" type="primary">
//             Update
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default EditDonationPage;
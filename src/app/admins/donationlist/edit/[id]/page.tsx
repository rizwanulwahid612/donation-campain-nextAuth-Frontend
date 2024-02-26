import UpdatePostForm from "@/components/view/DonationUpdate/DonationUpdate"

const EditDonationPage = async ({ params }:{params:any}) => {
    console.log("params:",params.id)
    //http://localhost:5000/api/v1
    const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations/${params.id}`,{
   // const res = await fetch(`http://localhost:5000/api/v1/donations/${params.id}`,{  
      cache:"no-store"
    })
    const postby = await res.json()
    console.log("postbyId:",postby?.data)
    const singleData= postby?.data
    
    return (
        <>
      
        <UpdatePostForm id={params.id} singleData={singleData}/>
        </>
    )
}

export default EditDonationPage



















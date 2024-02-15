import { authOptions } from "@/app/lib/AuthOptions"
import DonationDetails from "@/components/view/DonationDetails/DonationDetails"
import { getServerSession } from "next-auth"


// export const generateStaticParams=async()=> {
//     const res = await fetch("http://localhost:5000/api/v1/donations",{
//         next:{
//             revalidate:2,
//         }
//     })
//     const postdata = await res.json()
//     const ids = postdata?.data?.map((post:any) => {
//         return {
//             id: post?._id + " "
//         }

//     })
//     console.log("ids",ids)
//     return ids
// }
const PostpageById = async ({ params }:{params:any}) => {
    console.log("params:",params.id)
    const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations/${params.id}`,{
        cache:"no-store"
    })
    const postby = await res.json()
    console.log("postbyId:",postby?.data)
    const singleData= postby?.data
    const session = await getServerSession(authOptions);
    console.log( "session:",session);
    return (
        <div>
        <DonationDetails singleData={singleData} session={session}/>
        </div>
    )
}

export default PostpageById
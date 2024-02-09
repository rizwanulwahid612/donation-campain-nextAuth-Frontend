import { authOptions } from "@/app/lib/AuthOptions"
import DonationDetails from "@/components/view/DonationDetails/DonationDetails"
import { Button, Card, Col, Rate, Row } from "antd"
import Meta from "antd/es/card/Meta"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/api/v1/donations")
    const postdata = await res.json()
    const ids = postdata?.data?.map((post:any) => {
        return {
            id: post?._id + " "
        }

    })
    console.log("ids",ids)
    return ids
}
const PostpageById = async ({ params }:{params:any}) => {
    console.log("params:",params.id)
    const res = await fetch(`http://localhost:5000/api/v1/donations/${params.id}`)
    const postby = await res.json()
    console.log("postbyId:",postby?.data)
    const singleData= postby?.data
    const session = await getServerSession(authOptions);
    console.log( "session:",session);
    return (
        <>
        <DonationDetails singleData={singleData} session={session}/>
        </>
    )
}

export default PostpageById
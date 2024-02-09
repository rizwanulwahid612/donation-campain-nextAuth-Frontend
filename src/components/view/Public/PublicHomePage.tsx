
"use client"
import Link from "next/link";
//import { useEffect } from "react";

export const PublicHomepage = async() => {
    //const session = await getServerSession(authOptions);
  //console.log( "session:",session);
    const res = await fetch("http://localhost:5000/api/v1/donations", {
        next: {
            revalidate: 5,
        }
    });
    const posts = await res.json();
   // console.log(posts?.data)
   //useEffect(()=>{},[])
  return (
    <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                {posts?.data?.map((p:any, i:any) => <div key={i} className="card-body">
                    <h2 className="card-title">{p?.title}</h2>
                    <p>{p?.productName}</p>
                    <p>{p?.description}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts/${p?.id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>)}

            </div>


        </div>
  )
}
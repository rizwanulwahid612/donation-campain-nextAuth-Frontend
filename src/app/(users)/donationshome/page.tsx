import { Homepage } from '@/components/view/Home/Home'
import React from 'react'

const DonationsHome = async() => {
   const res = await fetch(`${process.env.BACKEND_URL}/donations`, {
        
        next: {
            revalidate: 2,
        }
    });
    const posts = await res.json();
  return (
    <div><Homepage posts={posts}/></div>
  )
}

export default DonationsHome
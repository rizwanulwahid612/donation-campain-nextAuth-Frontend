import { Homepage } from '@/components/view/Home/Home'
import React from 'react'

const DonationsHome = async() => {
   const res = await fetch(`http://localhost:5000/api/v1/donations`, {
        
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
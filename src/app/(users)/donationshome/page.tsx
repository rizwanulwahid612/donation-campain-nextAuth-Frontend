import { Homepage } from '@/components/view/Home/Home'
import React from 'react'

const DonationsHome = async() => {
   const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations`);
    const posts = await res.json();
  return (
    <div><Homepage posts={posts}/></div>
  )
}

export default DonationsHome
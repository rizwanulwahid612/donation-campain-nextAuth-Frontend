import { authOptions } from "@/app/lib/AuthOptions";
import Admin from "@/components/view/Admin/Admin";
import User from "@/components/view/User/User";
import { getServerSession } from "next-auth";

const MyProfilepage = async() => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/users`);
   //const res = await fetch(`http://localhost:5000/api/v1/users`);
    const posts = await res.json();
  return (
    <div>
      <Admin posts={posts} session={session?.user?.email}/>
    </div>
  )
}

export default MyProfilepage

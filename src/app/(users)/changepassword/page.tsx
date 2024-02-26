import { authOptions } from "@/app/lib/AuthOptions";
import ChangePassword from "@/components/view/ChangePassword/ChangePassword";
//import User from "@/components/view/User/User";
import { getServerSession } from "next-auth";

const CHPassword = async() => {
  const session = await getServerSession(authOptions);
  
  const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/users`);
  //const res = await fetch(`http://localhost:5000/api/v1/users`);
    const posts = await res.json();
  return (
    <div>
      <ChangePassword posts={posts} session={session?.user?.email}/>
    </div>
  )
}

export default CHPassword

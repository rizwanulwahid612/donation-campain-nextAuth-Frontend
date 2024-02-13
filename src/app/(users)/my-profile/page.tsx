import { authOptions } from "@/app/lib/AuthOptions";
import User from "@/components/view/User/User";
import { getServerSession } from "next-auth";

const MyProfilepage = async() => {
  const session = await getServerSession(authOptions);
  //console.log( "session:",session?.user?.email);
  const res = await fetch(`${process.env.BACKEND_URL}/users`, {
        
        next: {
            revalidate: 2,
        }
    });
    const posts = await res.json();
  return (
    <div>
      <User posts={posts} session={session?.user?.email}/>
    </div>
  )
}

export default MyProfilepage

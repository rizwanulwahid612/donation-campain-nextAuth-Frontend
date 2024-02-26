
import { authOptions } from "@/app/lib/AuthOptions";
import UserDashboardPage from "@/components/view/UserDashboardPage/UserDashboardPage";
import { getServerSession } from "next-auth";


const UserDashboard = async() => {
   const session = await getServerSession(authOptions);
    console.log( "session:",session);
   const res = await fetch(`https://donation-server-opal.vercel.app/api/v1/postdonations`);
  //const res = await fetch(`http://localhost:5000/api/v1/postdonations`);
    const posts = await res.json();
  return (
    <div>
      <UserDashboardPage posts={posts} session={session}/>
    </div>
  )
}

export default UserDashboard

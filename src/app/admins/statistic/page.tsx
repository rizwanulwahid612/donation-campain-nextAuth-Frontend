
import { authOptions } from "@/app/lib/AuthOptions";
import PieChartsPage from "@/components/PieChart/PieChart"
import { getServerSession } from "next-auth";



const StatisticPage = async() => {
  const session = await getServerSession(authOptions);
    console.log( "session:",session);
  const res = await fetch("http://localhost:5000/api/v1/postdonations", {
        next: {
            revalidate: 1,
        }
    });
    const posts = await res.json();
  return (
    <>
      <PieChartsPage session={session} posts={posts}/>
    </>
  )
}

export default StatisticPage


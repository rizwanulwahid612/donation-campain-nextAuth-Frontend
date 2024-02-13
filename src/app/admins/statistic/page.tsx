
import { authOptions } from "@/app/lib/AuthOptions";
import LineChatPage from "@/components/LineChartPage/LineChartPage";
import PieChartsPage from "@/components/PieChart/PieChart"
import { getServerSession } from "next-auth";
//import { LineChart } from "recharts";



const StatisticPage = async() => {
  const session = await getServerSession(authOptions);
    console.log( "session:",session);
  const res = await fetch(`${process.env.BACKEND_URL}/postdonations`, {
        next: {
            revalidate: 2,
        }
    });
    const posts = await res.json();


    const result = await fetch(`${process.env.BACKEND_URL}/donations`, {
        
        next: {
            revalidate: 2,
        }
    });
    const posts2 = await result.json();
  return (
    <>
      <PieChartsPage session={session} posts={posts}/>
      <LineChatPage posts2={posts2}/>
      
    </>
  )
}

export default StatisticPage


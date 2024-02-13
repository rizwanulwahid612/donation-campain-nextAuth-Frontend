
import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import { PublicHomepage } from "@/components/view/Public/PublicHomePage";

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/donations`, {
        
        next: {
            revalidate: 2,
        }
    });
    const posts = await res.json();
  const session = await getServerSession(authOptions);
  console.log( "session:",session);

  return (
    <div>
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <PublicHomepage  posts={posts}/>
         </div>
      
    </div>
  );
}





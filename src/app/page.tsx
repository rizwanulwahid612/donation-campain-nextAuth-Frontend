
import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import { PublicHomepage } from "@/components/view/Public/PublicHomePage";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log( "session:",session);

  return (
    <div>
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <PublicHomepage session={session}/>
         </div>
      
    </div>
  );
}





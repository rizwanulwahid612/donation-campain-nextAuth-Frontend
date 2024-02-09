//import PatientHeader from "@/components/view/Header/PatientHeader/PatientHeader";
import UserHeader from "@/components/view/Header/UserHeader/UserHeader";
//import { Homepage } from "@/components/view/Home/Home";
import UserSidebar from "@/components/view/Sidebar/UserSidebar/UserSidebar";
//import PatientSidebar from "@/components/view/Sidebar/PatientSidebar/PatientSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <UserHeader />
      <div className="min-h-[calc(100vh-64px)]">
        
         <UserSidebar>{children}</UserSidebar>
        
        
        
      </div>
    </div>
  );
}
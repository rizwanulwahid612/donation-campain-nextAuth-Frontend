import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const UserHeader = async () => {
  const items = [
    { key: "1", label: "My Profile", href: "/my-profile" },
  { key: "2", label: "User Dashboard", href: "/userdashboard" },

];
  const session: any = await getServerSession(authOptions);
  return (
    <>
      <Navbar
        items={items}
        hasSider
        session={ session?.user?.email}
      />
    </>
  );
};

export default UserHeader;
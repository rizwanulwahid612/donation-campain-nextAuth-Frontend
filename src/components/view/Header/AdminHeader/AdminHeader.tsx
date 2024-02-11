import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const AdminHeader = async () => {
  const items = [
    { key: "1", label: "Ceate Admins", href: "/admins" },
    { key: "2", label: "Donationlist", href: "/admins/donationlist" },
    { key: "3", label: "Statistic", href: "/admins/statistic" },
  ];
  const session : any = await getServerSession(authOptions);
  const sess=session.user.email
  return (
    <>
      <Navbar
        items={items}
        hasSider
        session={ session?.user?.email}
        // session={session?.accessToken ? true : false}
      />
    </>
  );
};

export default AdminHeader;
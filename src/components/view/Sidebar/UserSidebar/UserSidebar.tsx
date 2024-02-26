import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    // { key: "1", label: "Donations Home", href: "/donationshome" },
    { key: "1", label: "My Profile", href: "/my-profile" },
    { key: "2", label: "Change Password", href: "/changepassword" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
  
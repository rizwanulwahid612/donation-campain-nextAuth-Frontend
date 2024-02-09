import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Donations Home", href: "/donationshome" },
    { key: "2", label: "My Profile", href: "/my-profile" },
    { key: "3", label: "User Dashboard", href: "/userdashboard" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
  
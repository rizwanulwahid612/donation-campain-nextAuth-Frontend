import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
    { key: "3", label: "Donationlist", href: "/admins/donationlist" },
    { key: "4", label: "Statistic", href: "/admins/statistic" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
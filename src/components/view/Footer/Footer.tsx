"use client";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {

  return (
    <Footer style={{ textAlign: "center", backgroundColor:"black",color:"white" }}>
      Donation Campain &copy; {new Date().getFullYear()} Created by Rizwanul Wahid
    </Footer>
  );
};

export default FooterComponent;
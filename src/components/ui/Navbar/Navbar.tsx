"use client";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import donatelogo from "../../../assets/kisspng-money-makes-the-world-go-round-donation-twitch-donate-5ac6ecd5b41027.9283162515229861977376.jpg"
import Image from "next/image";
const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
  session,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
  session: boolean;
}) => {
  console.log(session, "session");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className="layout">
      <Header className="flex items-center">
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden"
            onClick={() => {
              dispatch(showSidebarDrawer());
            }}
          >
            <MenuOutlined />
          </Button>
        )}
        <Content>
          <Link href="/">
            <Title
      className={`m-0 text-white ${
        hasSider && "text-center lg:text-left"
      }`}
      style={{ fontSize: '16px' }} // Adjust the font size as needed
    >
      <div style={{display:"flex",alignItems:"center"}}>
      <Image src={donatelogo} alt="" width={160} height={60} />
       <h4 style={{color:"white"}}>Campain</h4>
       </div>
    </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <Button
              type="primary"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              LogIn
            </Button>
          )}
        </Menu>

        <Button type="primary" className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} visible={open}>
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
                 {session ? (
            <Button
              type="primary"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              LogIn
            </Button>
          )}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
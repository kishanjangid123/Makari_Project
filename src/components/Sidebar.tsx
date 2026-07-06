import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";

const { Sider } = Layout;

const menuItems: MenuProps["items"] = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "/user",
    icon: <UserOutlined />,
    label: <Link to="/user">Users</Link>,
  },
  {
    key: "/reports",
    icon: <FileTextOutlined />,
    label: <Link to="/reports">Reports</Link>,
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: <Link to="/setting">Settings</Link>,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Sider
      width={250}
      breakpoint="lg"
      collapsedWidth={80}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        Makari
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
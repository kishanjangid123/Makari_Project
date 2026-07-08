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

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const Sidebar = ({
  collapsed,
  setCollapsed,
}: SidebarProps) => {
  const location = useLocation();

  return (
    <Sider
      width={250}
      collapsedWidth={80}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(value) => setCollapsed(value)}
      trigger={null}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: collapsed ? 18 : 22,
          fontWeight: "bold",
        }}
      >
        {collapsed ? "M" : "Makari"}
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
import { Layout, Avatar, Space, Input } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Search placeholder="Search..." style={{ width: 300 }} />

      <Space size="large">
        <BellOutlined style={{ fontSize: 20,marginTop:"30px" }} />
        <Avatar icon={<UserOutlined />} />
      </Space>
    </Header>
  );
};

export default AppHeader;
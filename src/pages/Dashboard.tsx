import { Card, Col, Row, Statistic, Table, Tag } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Customer",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string) => (
      <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
    ),
  },
];

const data = [
  {
    key: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    key: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    status: "Inactive",
  },
  {
    key: 3,
    name: "Alex Brown",
    email: "alex@example.com",
    status: "Active",
  },
];

const Dashboard = () => {
  return (
    <>
      <h1 style={{ marginBottom: 30 }}>Dashboard</h1>

      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1260}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Orders"
              value={875}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Revenue"
              value={24500}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Growth"
              value={18}
              suffix="%"
              prefix={<RiseOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[20, 20]} style={{ marginTop: 25 }}>
        <Col span={24}>
          <Card title="Recent Customers">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
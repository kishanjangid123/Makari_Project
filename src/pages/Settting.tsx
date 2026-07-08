import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Switch,
} from "antd";

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const onFinish = (values: any) => {
    setLoading(true);

    setTimeout(() => {
      console.log(values);
      message.success("Settings saved successfully");
      setLoading(false);
      form.resetFields()
    }, 1500);
  };
  return (
    <Card
      title="Profile Settings"
      style={{
        maxWidth: 900,
        margin: "10px auto",
        borderRadius: 12,
      }}
    >
      <div style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "70vh" }}>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{
            theme: true,
            notification: true,
          }}
        >
          <Row gutter={20}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your name" },
                ]}
              >
                <Input placeholder="Enter Full Name" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Invalid Email" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  { required: true, message: "Please enter phone number" },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Enter valid phone number",
                  },
                ]}
              >
                <Input placeholder="Enter Phone Number" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Role"
                name="role"
                rules={[
                  { required: true, message: "Please select role" },
                ]}
              >
                <Select placeholder="Select Role">
                  <Option value="admin">Admin</Option>
                  <Option value="manager">Manager</Option>
                  <Option value="employee">Employee</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Please select department",
                  },
                ]}
              >
                <Select placeholder="Select Department">
                  <Option value="it">IT</Option>
                  <Option value="hr">HR</Option>
                  <Option value="finance">Finance</Option>
                  <Option value="marketing">Marketing</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Language"
                name="language"
                rules={[
                  {
                    required: true,
                    message: "Please select language",
                  },
                ]}
              >
                <Select placeholder="Select Language">
                  <Option value="english">English</Option>
                  <Option value="hindi">Hindi</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Bio" name="bio">
                <Input.TextArea
                  rows={4}
                  placeholder="Write something about yourself..."
                />
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item>
                <Button loading={loading}
                  type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button onClick={() => form.resetFields()}>
                  Reset
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};

export default Settings;
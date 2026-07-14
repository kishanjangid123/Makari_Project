import React, { useState } from 'react'
import axiosInstance from '../services/Axios';
import { Table } from "antd";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/users");
        setUsers(response.data.data);
        console.log(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];
  return (
    <div>
      <h3>Users</h3>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
    </div>
  )
}

export default User
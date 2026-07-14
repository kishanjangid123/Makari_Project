import React, { useEffect, useState } from "react";
import axiosInstance from "../services/Axios";
import { Table, Input, message } from "antd";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchUsers();
  }, [debouncedSearch]);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await axiosInstance.get("/api/users", {
        params: {
          search: debouncedSearch,
        },
      });

      setUsers(response.data.data);
    } catch (error) {
      message.error("Failed to load users");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
  ];

  return (
    <div>
      <h3>Users</h3>

      <Input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 300, marginBottom: 20 }}
      />

      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default User;
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AppHeader";

import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Settting";
import Reports from "./pages/Reports";
import User from "./pages/User";
import { useState } from "react";

const { Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <Sidebar 
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

    <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            minHeight: "100vh",
            transition: "0.3s",
          }}
        >          <AppHeader />

          <Content
            style={{
              padding: "24px",
              background: "#f5f5f5",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
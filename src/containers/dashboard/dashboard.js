import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useDispatch } from "react-redux";
import actions from "../../redux/auth/actions";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import Table from "../../components/table/table";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Dashboard({ history }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actions.logout(history));
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Settings</Menu.Item>
          <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboar</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;

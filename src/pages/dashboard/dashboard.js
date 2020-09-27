import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/auth/actions";
import employeeActions from "../../redux/employeeDetails/actions";

import { UserOutlined } from "@ant-design/icons";
import "./dashboard.css";
import Table from "../../components/table/table";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Dashboard({ history }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout(history));
  };
  const employeeDetails = useSelector(
    (state) => state.employeeDetails.employeeDetails
  );

  useEffect(() => {
    dispatch(employeeActions.fetchingEmployeData());
  }, []);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="3" onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, paddingTop: "35px" }}
          >
            <SubMenu key="Team 1" icon={<UserOutlined />} title="Team 1">
              <Menu.Item key="1">ALL</Menu.Item>
              {employeeDetails.map((value, i) => {
                return <Menu.Item key={i + 2 }>{value.EmployeeId.S}</Menu.Item>
              })}
            </SubMenu>
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

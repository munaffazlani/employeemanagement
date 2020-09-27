import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function SideMenu({employeeDetails}) {
    return (
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, paddingTop: "45px" }}
          >
            <SubMenu key="Team 1" icon={<UserOutlined />} title="Team 1">
              <Menu.Item key="1">ALL</Menu.Item>
              {employeeDetails.map((value, i) => {
                return <Menu.Item key={i + 2}>{value.EmployeeId.S}</Menu.Item>;
              })}
            </SubMenu>
          </Menu>
        </Sider>
      </Content>
    );
}

export default SideMenu

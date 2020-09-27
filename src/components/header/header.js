import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import authActions from "../../redux/auth/actions";

const { Header } = Layout;

function AppHeader({ history }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.loggingOut(history));
  };
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2" onClick={handleLogout}>
          Log Out
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;

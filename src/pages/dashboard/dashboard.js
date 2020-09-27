import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import employeeActions from "../../redux/employeeDetails/actions";
import EmployeeTable from "../../components/table/employeeTable";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import SideMenu from "../../components/sidemenu/sidemenu";
import Loader from "../../components/utility/loader";
import AppHeader from "../../components/header/header";
import "./dashboard.css";
const { Content } = Layout;
function Dashboard() {
  const dispatch = useDispatch();

  const employeeDetails = useSelector(
    (state) => state.employeeDetails.employeeDetails
  );

  useEffect(async () => {
    dispatch(employeeActions.fetchingEmployeData());
  }, []);

  if (employeeDetails) {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <SideMenu employeeDetails={employeeDetails} />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumbs items={["Home", "Dashboard"]} />
            <Content
              className="site-layout-background"
              style={{
                margin: 0,
                minHeight: "100%",
              }}
            >
              <EmployeeTable employeeData={employeeDetails} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  } else {
    return <Loader />;
  }
}

export default Dashboard;

import React from "react";
import MaterialTable from "material-table";

function EmployeeTable({employeeData}) {
    const employeeDataArray = employeeData && employeeData.map(value => ({
            name: value.EmployeeId.S,
            monday: value.Mon.N,
            tuesday: value.Tue.N,
            wednesday: value.Wed.N,
            thursday: value.Thu.N,
            friday: value.Fri.N,
            total: value.Weeklyhours.N,
            status: value.Estatus.S,
          }))
    console.log(EmployeeTable);
  return (
    <div>
      <MaterialTable
        title="Employee Login Details"
        columns={[
          { title: "Name", field: "name" },
          { title: "Monday", field: "monday", type: "numeric" },
          { title: "Tuesday", field: "tuesday", type: "numeric" },
          { title: "Wednesday", field: "wednesday", type: "numeric" },
          { title: "Thursday", field: "thursday", type: "numeric" },
          { title: "Friday", field: "friday", type: "numeric" },
          { title: "Total Hours", field: "total", type: "numeric" },
          { title: "Status", field: "status" },
        ]}
        data={employeeDataArray}
        options={{
          headerStyle: {
            backgroundColor: "#1890ff",
            color: "#FFF",
          },
        }}
      />
    </div>
  );
}

export default EmployeeTable;

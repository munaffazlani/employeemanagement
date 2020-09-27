import React from "react";
import { Breadcrumb } from "antd";

function Breadcrumbs({ items }) {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {items.map((item) => (
        <Breadcrumb.Item>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;

import React from "react";
import { Spin, Space } from 'antd';
import "./loader.css";

export default (Loader) => (
  <div id="loader">
    <Spin size="large" />
  </div>
);

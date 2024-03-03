import React from "react";
import { Pagination } from "antd";

const AntdPagination = ({ totalData, current, setCurrent }) => {
  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={totalData} />;
};
export default AntdPagination;

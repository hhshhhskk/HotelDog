import React from "react";
import { Pagination } from "antd";

const AntdPagination = ({ totalData, current, setCurrent, pageSize }) => {
  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };
  console.log(pageSize);
  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={totalData}
      pageSize={pageSize}
    />
  );
};
export default AntdPagination;

import styled from "@emotion/styled";
import React from "react";

const DefaultBt = styled.button`
  background-color: #654222;
  border: none;
  border-radius: 10px;
  padding: 15px 70px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

const DefaultButton = props => {
  return (
    <div>
      {/* props로 버튼 안에 있는 글씨 바꿔서 쓰기 */}
      <DefaultBt>{props.children}동 의</DefaultBt>
    </div>
  );
};

export default DefaultButton;

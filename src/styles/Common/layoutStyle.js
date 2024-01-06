import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 100%;
  // 헤더가 fixed라서 헤더탑 높이만큼 밀기
  margin-top: 50px;
`;

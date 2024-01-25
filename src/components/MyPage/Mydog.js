import styled from "@emotion/styled";
import React, { useState } from "react";

const MydogPage = styled.div`
  margin-left: 85px;
  position: relative;
  width: 865px;
`;
// PageTitle 공통 스타일로 빼도됨

const PageTitle = styled.div`
  position: relative;
  height: auto;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
// ListNone 공통 스타일로 빼도됨
const ListNone = styled.div`
  position: relative;
  display: flex;
  width: 950px;
  height: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: -85px;
  margin-top: 150px;
  img {
    position: relative;
    height: 68px;
    margin-bottom: 23px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    margin-bottom: 1px;
  }
  span {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #969696;
    margin-bottom: 14px;
  }

  a {
    display: flex;
    justify-content: center;
    color: #e5b300;
    width: 150px;
    height: 40px;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #e5b300;
    background: #fff;
    cursor: pointer;
    align-items: center;
  }
`;
const DogList = styled.div`
  position: relative;
`;
const DogListLeft = styled.div`
  position: relative;
`;
const DogListRight = styled.div`
  position: relative;
`;
const Line = styled.div`
  position: relative;
  display: flex;
  height: 20px;
  border-left: 3px solid #654222;
`;
const DogInfo = styled.div`
  position: relative;
`;
const DogDetail = styled.div`
  position: relative;
`;
const DogBt = styled.div`
  position: relative;
`;
const DogDelete = styled.div`
  position: relative;
`;
const DogUp = styled.div`
  position: relative;
`;

const Mydog = () => {
  const [image, setImage] = useState();
  return (
    <MydogPage>
      <PageTitle>
        <p>반려견 정보</p>
      </PageTitle>
      <DogList>
        <DogListLeft>
          <input type="file" />
        </DogListLeft>
        <DogListRight>
          <DogInfo>
            {/* <Line />
            <input type="text">이름</input>
            <Line />
            <input type="text">나이</input>
            <Line />
            <option value="소형견">이름</option>
            <option value="중형견">이름</option> */}
          </DogInfo>
          <DogDetail></DogDetail>
          <DogBt>
            <DogDelete></DogDelete>
            <DogUp></DogUp>
          </DogBt>
        </DogListRight>
      </DogList>
      {/* <ListNone>
        <img src={`${process.env.PUBLIC_URL}/images/MyPage/dog.svg`} />
        <p>반려견 정보가 없습니다.</p>
        <span>대표 반려견을 등록해주세요</span>
      </ListNone> */}
    </MydogPage>
  );
};

export default Mydog;

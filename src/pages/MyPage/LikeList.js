import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import HotelLike from "../../components/Common/HotelLike";
import HotelCardForm from "../../components/Common/HotelCardForm";
import { HotelCardDiv } from "../../styles/Common/hotelCardFormStyle";
import jwtAxios from "../../utils/jwtUtil";
import { Pagination } from "antd";

const LikePage = styled.div`
  margin-left: 85px;
  position: relative;
  /* display: flex; */
  width: 865px;
  /* height: 980px; */
  /* background-color: lightblue; */
`;
const PageTitle = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 35px;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
// ListNone공통 스타일로 빼도됨
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
    font-weight: 500;
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

const TwoColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

const LikeList = ({ handleSelectGo, getLikeListData }) => {
  const [likeListData, setLikeListData] = useState([]);
  const [page, setPage] = useState(1);
  const [rendering, setRendering] = useState(null);
  const [currentPage, setCurrentPage] = useState([]); // 현재 페이지 상태 추가

  useEffect(
    () => {
      const getLikeListData = async () => {
        try {
          // 페이지에 해당하는 요청 URL 생성
          const url = `/api/hotel/like?page=${page}`;

          // 스웨거에서 데이터 가져오는 요청 보내기
          const res = await jwtAxios({
            method: "get",
            url: url,
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(res.data);

          setLikeListData(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      // 데이터 불러오기 함수 호출
      getLikeListData();
    },
    [rendering],
    [currentPage],
  ); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  if (!getLikeListData) getLikeListData = [];

  const handlePageChange = page => {
    rendering(page);
  };

  return (
    <LikePage>
      <PageTitle>
        <p>찜한 호텔</p>
      </PageTitle>

      {likeListData.length > 0 ? (
        <TwoColumns>
          {likeListData.map((hotel, index) => (
            <div
              key={index}
              style={{ marginBottom: "20px", width: "calc(50% - 10px)" }}
            >
              <HotelCardDiv>
                <HotelCardForm
                  hotel={hotel}
                  handleSelectGo={handleSelectGo}
                  setRendering={setRendering}
                />
              </HotelCardDiv>
            </div>
          ))}
        </TwoColumns>
      ) : (
        <ListNone>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/heart.svg`} />
          <p>찜한 목록이 없습니다.</p>
          <span>다양한 호텔 상품들을 만나보세요</span>
          <a href="/"> 호텔 목록 보러가기</a>
        </ListNone>
      )}
      <Pagination
        current={currentPage} // 현재 페이지 번호
        total={likeListData.length} // 전체 아이템 수
        onChange={page => setCurrentPage(page)} // 페이지 변경 핸들러
        pageSize={6} // 한 페이지에 표시할 아이템 수
        showSizeChanger={false} // 페이지 크기 조절기 숨김
      />
    </LikePage>
  );
};

export default LikeList;

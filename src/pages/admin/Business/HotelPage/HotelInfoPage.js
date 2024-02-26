import styled from "@emotion/styled";
import React from "react";

export const HotelInfoWrap = styled.div`
  position: relative;
  background-color: #eee;
  height: 100%;
  /* 100% 로 가야히지 않을까 */
  width: 1620px;
  padding: 80px 210px;
`;

export const HotelInfoTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;

  button {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #346fff;
    font-size: 1.6rem;
  }
`;

export const AdButton = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #346fff;
  font-size: 1.6rem;
`;

export const ModifyButtonDiv = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  button {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #323232;
    font-size: 1.6rem;
  }
`;

export const HotelInfoDiv = styled.div`
  position: relative;
`;

export const HotelInfoCard = styled.div`
  position: relative;
  background-color: #fff;
`;

export const CardTitle = styled.div`
  position: relative;
  height: 75px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  span {
    font-size: 2rem;
    font-weight: 800;
    padding-left: 25px;
  }
`;

export const HotelInfoContents = styled.div`
  position: relative;
  display: flex;
  padding: 50px;
`;

export const HotelInfoLeft = styled.div`
  position: relative;
  display: flex;
`;

export const HotelInfoPreview = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  /* background-color: aqua; */
  img {
    width: 100%;
    height: 100%;
    /* 비율 유지 */
    object-fit: cover;
  }
`;

export const HotelInfoPics = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* 간격이 일정하게 벌어지지 않음 */
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 300px;
  margin-left: 25px;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const HotelInfoRight = styled.div`
  position: relative;
  padding-left: 100px;
  font-size: 1.6rem;
  img {
    position: relative;
    top: -5px;
    padding: 0px 10px;
  }
`;

export const HotelInfoText = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 25px;
`;

export const ContentsTitle = styled.span`
  position: relative;
`;

export const HotelOptionDiv = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const HotelOption = styled.span`
  position: relative;
  padding: 5px 10px;
  color: #fff;
  background-color: #323232;
  font-size: 1.4rem;
  border-radius: 5px;
`;

export const HotelDesc = styled.div`
  position: relative;
  width: 470px;
`;

// 객실 정보
export const RoomInfoCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RoomInfoCard = styled.div`
  position: relative;
  margin-top: 25px;
  background-color: #fff;
  width: 587px;
`;

export const RoomInfoContents = styled.div`
  position: relative;
  display: flex;
  padding: 50px;
`;

export const RoomInfoPreview = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    /* 비율 유지 */
    object-fit: cover;
  }
`;

export const RoomInfoTextDiv = styled.div`
  position: relative;
  padding-left: 50px;
  font-size: 1.6rem;
  img {
    position: relative;
    top: -5px;
    padding: 0px 10px;
  }
`;

export const RoomInfoText = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 10px;
`;

export const RoomPriceDiv = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;

export const RoomDiscount = styled.span`
  position: relative;
  color: #e05353;
`;
export const RoomPrice = styled.span`
  position: relative;
  color: #666666;
  text-decoration: line-through;
`;
export const RoomTotalPrice = styled.span`
  position: relative;
`;

const HotelInfoPage = () => {
  return (
    <>
      <HotelInfoWrap>
        {/* 상단 버튼 */}
        <HotelInfoTop>
          <AdButton>호텔 광고 관리</AdButton>
          <ModifyButtonDiv>
            <button>호텔 수정</button>
            <button>객실 수정</button>
          </ModifyButtonDiv>
        </HotelInfoTop>

        <HotelInfoDiv>
          {/* 호텔 정보 */}
          <HotelInfoCard>
            <CardTitle>
              <span>호텔 정보</span>
            </CardTitle>

            <HotelInfoContents>
              {/* 호텔 사진 */}
              <HotelInfoLeft>
                <HotelInfoPreview>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="미리보기"
                  />
                </HotelInfoPreview>
                <HotelInfoPics>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="호텔사진1"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="호텔사진2"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="호텔사진3"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="호텔사진4"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="호텔사진5"
                  />
                </HotelInfoPics>
              </HotelInfoLeft>

              {/* 호텔 내용 */}
              <HotelInfoRight>
                <HotelInfoText>
                  <span>호텔 이름</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                    alt="구분선"
                  />
                  <span>네모네모 멈뭄미 호텔</span>
                </HotelInfoText>
                <HotelInfoText>
                  <span>호텔 주소</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                    alt="구분선"
                  />
                  <span>대구 광역시 북구</span>
                </HotelInfoText>
                <HotelInfoText>
                  <span>호텔 옵션</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                    alt="구분선"
                  />
                  <HotelOptionDiv>
                    <HotelOption>수영장</HotelOption>
                    <HotelOption>프로그램</HotelOption>
                  </HotelOptionDiv>
                </HotelInfoText>
                <HotelInfoText>
                  <span>호텔 설명</span>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                  </div>
                  <HotelDesc>
                    <span>
                      이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서
                      받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이
                      편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를
                      포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다.
                      복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만
                      사실입니다.
                    </span>
                  </HotelDesc>
                </HotelInfoText>
              </HotelInfoRight>
            </HotelInfoContents>
          </HotelInfoCard>

          {/* 객실 정보 영역 */}
          <RoomInfoCardDiv>
            <RoomInfoCard>
              <CardTitle>
                <span>객실 정보</span>
              </CardTitle>

              <RoomInfoContents>
                <RoomInfoPreview>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="객실 사진"
                  />
                </RoomInfoPreview>
                <RoomInfoTextDiv>
                  <RoomInfoText>
                    <span>객실 유형</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>소형견(7kg 이하)</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 개수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>20개</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>수용견 수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>1마리</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 가격</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <RoomPriceDiv>
                      <RoomDiscount>10%</RoomDiscount>
                      <RoomPrice>30000</RoomPrice>
                      <RoomTotalPrice>27000원</RoomTotalPrice>
                    </RoomPriceDiv>
                  </RoomInfoText>
                </RoomInfoTextDiv>
              </RoomInfoContents>
            </RoomInfoCard>

            <RoomInfoCard>
              <CardTitle>
                <span>객실 정보</span>
              </CardTitle>

              <RoomInfoContents>
                <RoomInfoPreview>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="객실 사진"
                  />
                </RoomInfoPreview>
                <RoomInfoTextDiv>
                  <RoomInfoText>
                    <span>객실 유형</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>소형견(7kg 이하)</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 개수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>20개</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>수용견 수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>1마리</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 가격</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <RoomPriceDiv>
                      <RoomDiscount>10%</RoomDiscount>
                      <RoomPrice>30000</RoomPrice>
                      <RoomTotalPrice>27000원</RoomTotalPrice>
                    </RoomPriceDiv>
                  </RoomInfoText>
                </RoomInfoTextDiv>
              </RoomInfoContents>
            </RoomInfoCard>

            <RoomInfoCard>
              <CardTitle>
                <span>객실 정보</span>
              </CardTitle>

              <RoomInfoContents>
                <RoomInfoPreview>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt="객실 사진"
                  />
                </RoomInfoPreview>
                <RoomInfoTextDiv>
                  <RoomInfoText>
                    <span>객실 유형</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>소형견(7kg 이하)</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 개수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>20개</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>수용견 수</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <span>1마리</span>
                  </RoomInfoText>
                  <RoomInfoText>
                    <span>객실 가격</span>
                    <img
                      src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                      alt="구분선"
                    />
                    <RoomPriceDiv>
                      <RoomDiscount>10%</RoomDiscount>
                      <RoomPrice>30000</RoomPrice>
                      <RoomTotalPrice>27000원</RoomTotalPrice>
                    </RoomPriceDiv>
                  </RoomInfoText>
                </RoomInfoTextDiv>
              </RoomInfoContents>
            </RoomInfoCard>
          </RoomInfoCardDiv>
        </HotelInfoDiv>
      </HotelInfoWrap>
    </>
  );
};

export default HotelInfoPage;

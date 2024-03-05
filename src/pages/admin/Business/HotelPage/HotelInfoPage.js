import React, { useEffect, useState } from "react";
import AdvertMain from "../../../../components/admin/Business/HotelInfo/Advert/AdvertMain";
import { useNavigate } from "react-router-dom";
import {
  AdButton,
  CardTitle,
  HotelDesc,
  HotelInfoCard,
  HotelInfoContents,
  HotelInfoDiv,
  HotelInfoLeft,
  HotelInfoPics,
  HotelInfoPreview,
  HotelInfoRight,
  HotelInfoText,
  HotelInfoTop,
  HotelInfoWrap,
  HotelOption,
  HotelOptionDiv,
  ModifyButtonDiv,
  RoomDiscount,
  RoomInfoCard,
  RoomInfoCardDiv,
  RoomInfoContents,
  RoomInfoPreview,
  RoomInfoText,
  RoomInfoTextDiv,
  RoomPrice,
  RoomPriceDiv,
  RoomTotalPrice,
} from "../../../../styles/AdminPageStyle/hotelPageStyle/hotelInfoPageStyle";
import { getJwtHotelInfoAPI } from "../../../../api/admin/Business/HotelManagement/HotelInfoApi";

const initHotelInfo = {
  hotelPk: 2,
  hotelNum: "H243107780202259",
  hotelNm: "멍뭉이 스타일 애견 호텔",
  hotelDetailInfo:
    "우리 애완견들도 편안한 휴식과 특별한 케어가 필요합니다. 우리 애견 호텔은 이러한 필요를 충족시키기 위해 설계되었습니다. 여러분의 사랑스러운 반려견이 편안하고 안전한 환경에서 휴식을 취하고 즐길 수 있도록 모든 시설과 서비스가 완벽하게 구비되어 있습니다.",
  businessNum: "5432109876",
  hotelCall: "01057938246",
  createdAt: "2024-03-01T20:22:59.720206",
  hotelPics: [
    "857a1bf1-19db-4e29-a76f-8c0f69fc6eaa.png",
    "32d2c74a-272b-4fdc-a0a1-fb5d5f9da2c1.png",
    "1717440e-9ce8-4507-9f70-c71a765fa5b9.png",
    "8f84f0e4-3782-4bd4-9cbf-f55664638235.png",
    "5e268d34-6690-488b-8f35-f076ac372f13.png",
  ],
  hotelFullAddress: "string string",
  hotelAddressInfo: {
    addressName: "string",
    region1DepthName: "string",
    region2DepthName: "string",
    region3DepthName: "string",
    zoneNum: "strig",
    x: "string",
    y: "string",
    detailAddress: "string",
  },
  approval: 0,
  optionList: [
    {
      optionPk: 1,
      optionNm: "swimming_pool",
    },
    {
      optionPk: 2,
      optionNm: "play_ground",
    },
    {
      optionPk: 3,
      optionNm: "hand_made_food",
    },
    {
      optionPk: 4,
      optionNm: "pick_up",
    },
    {
      optionPk: 5,
      optionNm: "dog_beautiy",
    },
    {
      optionPk: 6,
      optionNm: "dog_program",
    },
    {
      optionPk: 7,
      optionNm: "dog_walking",
    },
  ],
  businessCertificate: "9bc2644e-5dbb-45e3-b15e-f636a8260778.jpg",
  hotelRoomInfoList: [
    {
      hotelRoomPk: 1,
      sizePk: 1,
      hotelRoomNm: "소형견(7kg 이하)",
      roomPic: "6574a9c0-e1b2-4435-8650-e3b954ef437f.png",
      hotelRoomEa: 10,
      hotelRoomCost: 40000,
      maximum: 1,
      roomAble: 1,
      discountPer: "0",
      createdAt: "2024-03-01T20:22:59.748209",
      discountSignStatus: 0,
    },
    {
      hotelRoomPk: 2,
      sizePk: 2,
      hotelRoomNm: "중형견(15kg 이하)",
      roomPic: null,
      hotelRoomEa: 10,
      hotelRoomCost: 0,
      maximum: 1,
      roomAble: 1,
      discountPer: "0",
      createdAt: "2024-03-01T20:22:59.751212",
      discountSignStatus: 0,
    },
    {
      hotelRoomPk: 3,
      sizePk: 3,
      hotelRoomNm: "대형견(40kg 이하)",
      roomPic: null,
      hotelRoomEa: 10,
      hotelRoomCost: 0,
      maximum: 1,
      roomAble: 1,
      discountPer: "0",
      createdAt: "2024-03-01T20:22:59.752213",
      discountSignStatus: 0,
    },
    {
      hotelRoomPk: 4,
      sizePk: 4,
      hotelRoomNm: "초대형견(40kg 초과)",
      roomPic: null,
      hotelRoomEa: 10,
      hotelRoomCost: 0,
      maximum: 1,
      roomAble: 1,
      discountPer: "0",
      createdAt: "2024-03-01T20:22:59.753213",
      discountSignStatus: 0,
    },
  ],
  advertise: 0,
};

const HotelInfoPage = () => {
  const navigate = useNavigate();
  // 광고 모달창 상태
  const [AdvertModalState, setAdvertModalState] = useState(false);
  // 호텔 정보 상태
  const [hotelInfo, setHotelInfo] = useState(initHotelInfo);
  // 호텔 이미지 상태
  const [previewPic, setPreviewPic] = useState([hotelInfo.hotelPics]);

  // Get으로 호텔 정보 가져오기
  const getHotelInfo = async () => {
    const a = await getJwtHotelInfoAPI(setHotelInfo);
    console.log("컴포넌트 불러온데이터: ", a);
  };

  // 화면 초기 불러오기
  useEffect(() => {
    getHotelInfo();
  }, []);

  // 수정 버튼 클릭 시
  const handleClickModify = type => {
    if (type === "hotel") {
      navigate(`/admin/hotelModify`);
    } else if (type === "room") {
      navigate(`/admin/roomModify`);
    }
  };

  // 호텔 이미지 클릭 시
  const handleClickPic = picUrl => {
    setPreviewPic(picUrl);
  };

  // 옵션 값 변경하는 함수
  const optionName = optionPk => {
    switch (optionPk) {
      case 1:
        return "수영장";
      case 2:
        return "운동장";
      case 3:
        return "수제식";
      case 4:
        return "셔틀운행";
      case 5:
        return "프로그램";
      case 6:
        return "산책";
      case 7:
        return "미용";
    }
  };

  // 가격 천단위 표시
  const formatNumber = number => {
    if (number) {
      return number.toLocaleString();
    } else {
      return 0;
    }
  };

  // 호텔 할인가 계산
  const salePrice = (originalPrice, sale) => {
    if (originalPrice && sale) {
      const discount = (parseFloat(sale) / 100) * parseFloat(originalPrice);
      return (parseFloat(originalPrice) - discount).toLocaleString();
    }
    return null;
  };

  return (
    <>
      <HotelInfoWrap>
        {/* 광고 모달창 */}
        {AdvertModalState && (
          <AdvertMain setAdvertModalState={setAdvertModalState} />
        )}
        {/* 상단 버튼 */}
        <HotelInfoTop>
          <AdButton onClick={() => setAdvertModalState(true)}>
            호텔 광고 관리
          </AdButton>
          <ModifyButtonDiv>
            <button onClick={() => handleClickModify("hotel")}>
              호텔 수정
            </button>
            <button onClick={() => handleClickModify("room")}>객실 수정</button>
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
                  <img src={previewPic} alt="미리보기" />
                </HotelInfoPreview>
                <HotelInfoPics>
                  {hotelInfo.hotelPics.map &&
                    hotelInfo.hotelPics.map((pic, index) => (
                      <img
                        key={index}
                        // src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/${pic}`}
                        src={`http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/${hotelInfo.hotelPics}`}
                        alt={`호텔사진${index + 1}`}
                        onClick={() =>
                          handleClickPic(
                            `http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/${hotelInfo.hotelPics}`,
                          )
                        }
                      />
                    ))}
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
                  <span>{hotelInfo.hotelNm}</span>
                </HotelInfoText>
                <HotelInfoText>
                  <span>호텔 주소</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                    alt="구분선"
                  />
                  <span>{hotelInfo.hotelFullAddress}</span>
                </HotelInfoText>
                <HotelInfoText>
                  <span>호텔 옵션</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                    alt="구분선"
                  />
                  <HotelOptionDiv>
                    {hotelInfo.optionList.map(
                      option =>
                        option.optionPk && (
                          <HotelOption key={option.optionPk}>
                            {optionName(option.optionPk)}
                          </HotelOption>
                        ),
                    )}

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
                    <span>{hotelInfo.hotelDetailInfo}</span>
                  </HotelDesc>
                </HotelInfoText>
              </HotelInfoRight>
            </HotelInfoContents>
          </HotelInfoCard>

          {/* 객실 정보 영역 */}
          <RoomInfoCardDiv>
            {hotelInfo.hotelRoomInfoList.map(
              room =>
                room.hotelRoomPk && (
                  <RoomInfoCard key={room.hotelRoomPk}>
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
                          <span>{room.hotelRoomNm}</span>
                        </RoomInfoText>
                        <RoomInfoText>
                          <span>객실 개수</span>
                          <img
                            src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                            alt="구분선"
                          />
                          <span>{room.hotelRoomEa}개</span>
                        </RoomInfoText>
                        <RoomInfoText>
                          <span>수용견 수</span>
                          <img
                            src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                            alt="구분선"
                          />
                          <span>{room.maximum}마리</span>
                        </RoomInfoText>
                        <RoomInfoText>
                          <span>객실 가격</span>
                          <img
                            src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/line.svg`}
                            alt="구분선"
                          />
                          <RoomPriceDiv>
                            {hotelInfo.discountPer ? (
                              <>
                                <RoomDiscount>{room.discountPer}%</RoomDiscount>
                                <RoomPrice>{room.hotelRoomCost}</RoomPrice>
                                <RoomTotalPrice>
                                  {salePrice(
                                    room.hotelRoomCost,
                                    room.discountPer,
                                  )}
                                  원
                                </RoomTotalPrice>
                              </>
                            ) : (
                              <>
                                <RoomTotalPrice>
                                  {room.hotelRoomCost}원
                                </RoomTotalPrice>
                              </>
                            )}
                          </RoomPriceDiv>
                        </RoomInfoText>
                      </RoomInfoTextDiv>
                    </RoomInfoContents>
                  </RoomInfoCard>
                ),
            )}
          </RoomInfoCardDiv>
        </HotelInfoDiv>
      </HotelInfoWrap>
    </>
  );
};

export default HotelInfoPage;

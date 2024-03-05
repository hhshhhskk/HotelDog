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
  hotelPk: "",
  hotelNum: "",
  hotelNm: "",
  hotelDetailInfo: "",
  businessNum: "",
  hotelCall: "",
  createdAt: "",
  hotelPics: [],
  hotelFullAddress: "",
  hotelAddressInfo: {},
  approval: "",
  optionList: [],
  businessCertificate: "",
  hotelRoomInfoList: [],
  advertise: "",
};

const HotelInfoPage = () => {
  const navigate = useNavigate();
  // 광고 모달창 상태
  const [AdvertModalState, setAdvertModalState] = useState(false);
  // 호텔 정보 상태
  const [hotelInfo, setHotelInfo] = useState(initHotelInfo);
  // 호텔 이미지 상태
  const [previewPic, setPreviewPic] = useState([hotelInfo.hotelPics]);

  // Axios Get으로 호텔 정보 가져오기
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

import React, { useEffect, useState } from "react";
import {
  Ablebutton,
  ButtonDiv,
  NonAbleRoom,
  NonAblebutton,
  RoomCost,
  RoomCount,
  RoomDiscount,
  RoomModifyCard,
  RoomModifyCardTitle,
  RoomModifyContent,
  RoomModifyContentDiv,
  RoomModifyDiv,
  RoomModifyTitle,
  RoomModifyWrap,
  RoomPic,
  RoomPicAddButton,
  RoomPicAddButtonDiv,
  RoomPicDiv,
  RoomPicsDiv,
  RoomPicsTitle,
  RoomUse,
} from "../../../../styles/AdminPageStyle/hotelPageStyle/roomModifyStyle";
import {
  getJwtHotelInfoAPI,
  putJwtRoomModifyAPI,
} from "../../../../api/admin/Business/HotelManagement/HotelInfoApi";

// 호텔 정보 초기값
const initHotelInfo = {
  hotelPk: "",
  hotelNum: "",
  hotelNm: "",
  hotelDetailInfo: "",
  businessNum: "",
  hotelCall: "",
  createdAt: "",
  hotelPics: [
    {
      hotelPicPk: "",
      hotelPic: "",
    },
  ],
  hotelFullAddress: "",
  hotelAddressInfo: {
    addressName: "",
    region1DepthName: "",
    region2DepthName: "",
    region3DepthName: "",
    zoneNum: "",
    x: "",
    y: "",
    detailAddress: "",
  },
  approval: "",
  optionList: [
    {
      optionPk: "",
      optionNm: "",
    },
  ],
  businessCertificate: "",
  hotelRoomInfoList: [
    {
      hotelRoomPk: "",
      sizePk: "",
      hotelRoomNm: "",
      roomPic: "",
      hotelRoomEa: "",
      hotelRoomCost: "",
      maximum: "",
      roomAble: "",
      discountPer: "",
      createdAt: "",
      discountSignStatus: "",
    },
  ],
  advertise: "",
  hotelAdvertiseToDate: "",
  hotelAdvertiseEndDate: "",
};

// PUT 데이터 초기값
const initPostData = {
  roomPic: "",
  dto: {
    hotelRoomPk: "",
    hotelRoomEa: "",
    hotelRoomCost: "",
    discountPer: "",
  },
};

const RoomModifyPage = () => {
  // 호텔 정보 상태
  const [hotelInfo, setHotelInfo] = useState(initHotelInfo);

  // 토글로 처리
  const [roomUseChecked, setRoomUseChecked] = useState([]);

  const [previewImg, setPreviewImg] = useState([]);
  const [roomEa, setRoomEa] = useState("");
  const [cost, setCost] = useState("");
  const [discount, setDiscount] = useState("");

  // 화면 초기 불러오기
  useEffect(() => {
    // Axios Get으로 호텔 정보 가져오기
    const getHotelInfo = async () => {
      const data = await getJwtHotelInfoAPI(setHotelInfo);
      setHotelInfo(data);
      setRoomEa(data.hotelRoomEa);
      setCost(data.hotelRoomCost);
      setDiscount(data.descounterPer);

      // getHotelInfo가 완료된 후에 초기값 설정
      if (data.hotelPics.length > 0) {
        setPreviewImg(
          `http://112.222.157.156:5222/pic/hotel/${data.hotelPk}/${data.hotelPics[0].hotelPic}`,
        );
      }
    };

    getHotelInfo();
  }, []);

  const handleRoomUseChange = index => {
    const updatedRoomUseChecked = [...roomUseChecked];
    updatedRoomUseChecked[index] = !updatedRoomUseChecked[index];
    setRoomUseChecked(updatedRoomUseChecked);
  };

  // 이미지 선택했을 때
  const handleChangeUploadPic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(tempUrl);
      // setPreviewImg(prevImgs => [...prevImgs, tempUrl]);
    }
  };

  const handleChangeRoomEa = e => {
    const newRoomEa = e.target.value;
    setRoomEa(newRoomEa);
  };
  const handleChangeRoomCost = e => {
    const newRoomCost = e.target.value;
    setCost(newRoomCost);
  };
  const handleChangeRoomDiscout = e => {
    const newRoomDiscount = e.target.value;
    setDiscount(newRoomDiscount);
  };

  // 호텔 할인가 계산
  const salePrice = (originalPrice, sale) => {
    if (originalPrice && sale) {
      const discount = (parseFloat(sale) / 100) * parseFloat(originalPrice);
      return (parseFloat(originalPrice) - discount).toLocaleString();
    }
    return null;
  };

  // 전송 버튼
  const handleClickSubmit = async () => {
    const formData = new FormData();

    const sendData = {
      dto: {
        hotelRoomPk: initHotelInfo.hotelRoomPk,
        hotelRoomEa: roomEa,
        hotelRoomCost: cost,
        discountPer: discount,
      },
    };
    console.log("================ dto 에 담은 보낼 데이터 ", sendData);

    const dto = new Blob(
      [JSON.stringify(sendData)],
      // JSON 형식으로 설정
      { type: "application/json" },
    );

    formData.append("dto", dto);

    // const imagePromises = uploadImgBeforeFile.map((image, index) => {
    //   formData.append("roomPics", image);
    // });
    // 만약 변동이 없다면
    // if (imagePromises.length === 0) {
    //   formData.append("roomPics", JSON.stringify([]));
    // }
    // await Promise.all(imagePromises);

    // console.log("post 요청할 데이터 :", postData);
    putJwtRoomModifyAPI(formData);
    // navigate(`/admin/hotelinfo`);
  };

  return (
    <>
      <RoomModifyWrap>
        {/* 객실 정보들 */}
        {hotelInfo.hotelRoomInfoList.map((room, index) => (
          <RoomModifyDiv key={index}>
            {/* 객실 정보 카드 */}
            {/* {room.roomAble === 1 && (
              <NonAbleRoom>
                <p />
              </NonAbleRoom>
            )} */}
            <RoomModifyCard>
              <RoomModifyCardTitle>
                <div>
                  {room.roomAble === 1 ? (
                    <Ablebutton>활성화</Ablebutton>
                  ) : (
                    <NonAblebutton>비활성화</NonAblebutton>
                  )}
                </div>
                <p>객실 수정 _ {room.hotelRoomNm}</p>
              </RoomModifyCardTitle>

              {/* 버튼 포함 */}
              <RoomModifyContentDiv>
                {/* 타이틀 */}
                <RoomModifyTitle>
                  {/* <p>사용 여부</p> */}
                  <p>객실 유형</p>
                  <RoomPicsTitle>
                    <p>객실 이미지 첨부</p>
                  </RoomPicsTitle>
                  <p>객실 수</p>
                  <p>가격</p>
                  <p>할인율</p>
                </RoomModifyTitle>
                {/* 내용 */}
                <RoomModifyContent>
                  {/* <RoomUse>
                    <input type="checkbox" />
                  </RoomUse> */}
                  <p>{room.hotelRoomNm}</p>

                  <RoomPicsDiv>
                    <RoomPicDiv>
                      <RoomPic
                        src={
                          previewImg ||
                          `http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/room/${room.hotelRoomPk}/${room.roomPic}`
                        }
                        alt="객실 사진"
                      />

                      {/* {previewImg ? (
                        <RoomPic
                          src={previewImg}
                          alt="선택된 이미지 미리보기"
                        />
                      ) : (
                        <RoomPic
                          src={`http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/room/${room.hotelRoomPk}/${room.roomPic}`}
                          alt="기존 이미지 미리보기"
                        />
                      )} */}
                    </RoomPicDiv>
                    <RoomPicAddButtonDiv>
                      <label htmlFor="picUpload">
                        <RoomPicAddButton
                          type="button"
                          onClick={() => {
                            document.getElementById("picUpload").click();
                          }}
                        >
                          +
                        </RoomPicAddButton>
                      </label>
                      <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={e => {
                          handleChangeUploadPic(e);
                        }}
                        id="picUpload"
                        style={{ display: "none" }}
                      />
                    </RoomPicAddButtonDiv>
                  </RoomPicsDiv>

                  <RoomCount>
                    <input
                      type="text"
                      defaultValue={room.hotelRoomEa}
                      onChange={e => handleChangeRoomEa(e)}
                    />
                    <p>개</p>
                  </RoomCount>
                  <RoomCost>
                    <input
                      type="text"
                      defaultValue={room.hotelRoomCost}
                      onChange={e => handleChangeRoomCost(e)}
                    />
                    <p>원</p>
                  </RoomCost>
                  <RoomDiscount>
                    <input
                      type="text"
                      defaultValue={room.discountPer}
                      onChange={e => handleChangeRoomDiscout(e)}
                    />
                    <p>%</p>
                  </RoomDiscount>
                </RoomModifyContent>
              </RoomModifyContentDiv>
              <ButtonDiv>
                <button type="submit" onClick={() => handleClickSubmit()}>
                  저장
                </button>
              </ButtonDiv>
            </RoomModifyCard>
          </RoomModifyDiv>
        ))}
      </RoomModifyWrap>
    </>
  );
};

export default RoomModifyPage;

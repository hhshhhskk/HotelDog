import React, { useEffect, useState } from "react";
import {
  getJwtHotelInfoAPI,
  patchJwtRoomStateAPI,
  putJwtRoomModifyAPI,
} from "../../../../api/admin/Business/HotelManagement/HotelInfoApi";
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
} from "../../../../styles/AdminPageStyle/hotelPageStyle/roomModifyStyle";

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
  const [hotelRoomInfoList, sethotelRoomInfoList] = useState([]);

  const [previewImg, setPreviewImg] = useState([]);
  const [fileImg, setFileImg] = useState([]);

  // 화면 초기 불러오기
  useEffect(() => {
    // Axios Get으로 호텔 정보 가져오기
    const getHotelInfo = async () => {
      const data = await getJwtHotelInfoAPI(setHotelInfo);
      sethotelRoomInfoList(data.hotelRoomInfoList);
      console.log(data.hotelRoomInfoList);

      // getHotelInfo가 완료된 후에 초기값 설정
      const imgArr = data.hotelRoomInfoList.map(item => {
        return item.roomPic;
      });
      setPreviewImg(imgArr);
    };

    getHotelInfo();
  }, []);

  // 객실 상태 변환
  const handleClickRoomState = async (_index, _room) => {
    // 서버에 전송할 데이터
    const sendData = {
      hotelRoomPk: _room.hotelRoomPk,
      // roomAble: roomState ? 0 : 1, // 1이면 0으로, 0이면 1로 전환
    };

    // 서버에 데이터 전송 (post 함수 대신 실제로 사용할 함수로 변경)
    const res = await patchJwtRoomStateAPI(sendData);

    // 화면에 보여지는 것을 위해서 토클
    const tempArr = [...hotelRoomInfoList];
    tempArr[_index].roomAble = parseInt(res.result);
    sethotelRoomInfoList(tempArr);
  };

  // 이미지 선택했을 때
  const handleChangeUploadPic = e => {
    const indexVal = parseInt(e.target.id.replace("picUpload", ""));
    // console.log("어디니 ? ", indexVal);
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      const tempArr = [...previewImg];
      tempArr[indexVal] = tempUrl;
      setPreviewImg(tempArr);
      // 파일 변경된 보관 배열
      const tempFileArr = [...fileImg];
      tempFileArr[indexVal] = file;
      setFileImg(tempFileArr);
    }
  };

  // 객실 데이터 변동 시 이벤트
  const handleChangeRoomEa = (e, idx) => {
    const newRoomEa = e.target.value;
    const tempArr = [...hotelRoomInfoList];
    tempArr[idx].hotelRoomEa = parseInt(newRoomEa);
    sethotelRoomInfoList(tempArr);
  };
  const handleChangeRoomCost = (e, idx) => {
    const newRoomCost = e.target.value;
    const tempArr = [...hotelRoomInfoList];
    tempArr[idx].hotelRoomCost = parseInt(newRoomCost);
    sethotelRoomInfoList(tempArr);
  };
  const handleChangeRoomDiscount = (e, idx) => {
    const newRoomDiscount = e.target.value;
    const tempArr = [...hotelRoomInfoList];
    tempArr[idx].discountPer = parseInt(newRoomDiscount);
    sethotelRoomInfoList(tempArr);
  };

  // 전송 버튼
  const handleClickSubmit = async _index => {
    const formData = new FormData();

    const sendData = {
      hotelRoomPk: hotelRoomInfoList[_index].hotelRoomPk,
      hotelRoomEa: hotelRoomInfoList[_index].hotelRoomEa,
      hotelRoomCost: hotelRoomInfoList[_index].hotelRoomCost,
      discountPer: hotelRoomInfoList[_index].discountPer,
    };
    console.log("================ dto 에 담은 보낼 데이터 ", sendData);

    const dto = new Blob(
      [JSON.stringify(sendData)],
      // JSON 형식으로 설정
      { type: "application/json" },
    );
    formData.append("dto", dto);

    console.log("사진전송", fileImg[0]);
    formData.append("roomPics", fileImg[0]);

    putJwtRoomModifyAPI(formData);
  };

  return (
    <>
      <RoomModifyWrap>
        {/* 객실 정보들 */}
        {hotelRoomInfoList.map((room, index) => (
          <RoomModifyDiv key={index}>
            {/* 객실 정보 카드 */}
            {room.roomAble === 1 || (
              <NonAbleRoom>
                <p />
              </NonAbleRoom>
            )}
            <RoomModifyCard>
              <RoomModifyCardTitle>
                <div>
                  {room.roomAble === 1 ? (
                    <Ablebutton
                      onClick={() => handleClickRoomState(index, room)}
                    >
                      활성화
                    </Ablebutton>
                  ) : (
                    <NonAblebutton
                      onClick={() => handleClickRoomState(index, room)}
                    >
                      비활성화
                    </NonAblebutton>
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
                  <p>{room.hotelRoomNm}</p>
                  <RoomPicsDiv>
                    <RoomPicDiv>
                      {previewImg[index].includes("blob") ? (
                        <RoomPic
                          src={`${previewImg[index]}`}
                          alt="선택된 이미지 미리보기"
                        />
                      ) : (
                        <RoomPic
                          src={`/pic/hotel/${hotelInfo.hotelPk}/room/${room.hotelRoomPk}/${previewImg[index]}`}
                          alt="기존 이미지 미리보기"
                        />
                      )}
                    </RoomPicDiv>

                    <RoomPicAddButtonDiv>
                      <label htmlFor={`picUpload${index}`}>
                        <RoomPicAddButton
                          type="button"
                          onClick={() => {
                            document
                              .getElementById(`picUpload${index}`)
                              .click();
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
                        id={`picUpload${index}`}
                        style={{ display: "none" }}
                      />
                    </RoomPicAddButtonDiv>
                  </RoomPicsDiv>

                  <RoomCount>
                    <input
                      type="number"
                      defaultValue={room.hotelRoomEa}
                      onChange={e => handleChangeRoomEa(e, index)}
                    />
                    <p>개</p>
                  </RoomCount>
                  <RoomCost>
                    <input
                      type="number"
                      defaultValue={room.hotelRoomCost}
                      onChange={e => handleChangeRoomCost(e, index)}
                    />
                    <p>원</p>
                  </RoomCost>
                  <RoomDiscount>
                    <input
                      type="number"
                      defaultValue={room.discountPer}
                      onChange={e => handleChangeRoomDiscount(e, index)}
                    />
                    <p>%</p>
                  </RoomDiscount>
                </RoomModifyContent>
              </RoomModifyContentDiv>
              <ButtonDiv>
                <button type="submit" onClick={() => handleClickSubmit(index)}>
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getJwtHotelInfoAPI,
  postJwtHotelModifyAPI,
} from "../../../../api/admin/Business/HotelManagement/HotelInfoApi";
import {
  ButtonDiv,
  HotelModifyCard,
  HotelModifyCardTitle,
  HotelModifyContent,
  HotelModifyContentDiv,
  HotelModifyDiv,
  HotelModifyTitle,
  HotelModifyTitleDesc,
  HotelModifyTitlePic,
  HotelModifyWrap,
  HotelOption,
  HotelPic,
  HotelPicAddButton,
  HotelPicAddButtonDiv,
  HotelPicDiv,
} from "../../../../styles/AdminPageStyle/hotelPageStyle/hotelModifyStyle";

// 호텔 정보 초기값
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

// POST 데이터 초기값
const initPostData = {
  dto: {
    hotelDetailInfo: "",
    optionList: [],
  },
  hotelPics: [],
};

const options = [
  "수영장",
  "운동장",
  "수제식",
  "셔틀운행",
  "프로그램",
  "산책",
  "미용",
];

const HotelModifyPage = () => {
  const navigate = useNavigate();

  // 호텔 정보 상태
  const [hotelInfo, setHotelInfo] = useState(initHotelInfo);

  // 호텔 이미지 상태
  const [previewImg, setPreviewImg] = useState([]);
  // 호텔 옵션 상태
  const [selectedOptions, setSelectedOptions] = useState([]);
  // 호텔 설명 상태
  const [detailInfo, setDetailInfo] = useState();
  // API 전송될 데이터 상태
  const [postData, setPostData] = useState(initPostData);

  // 화면 초기 불러오기
  useEffect(() => {
    // Axios Get으로 호텔 정보 가져오기
    const getHotelInfo = async () => {
      const data = await getJwtHotelInfoAPI(setHotelInfo);
      setHotelInfo(data);
    };

    getHotelInfo();
  }, []);

  // 이미지 선택했을 때
  const handleChangeUploadPic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      // setPreviewImg(tempUrl);
      setPreviewImg(prevImgs => [...prevImgs, tempUrl]);
    }
  };

  // 옵션 선택했을 때
  const handleOptionChange = option => {
    // 이미 선택되어 있다면 제거, 아니면 추가
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(selected => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    console.log("옵션 상태", selectedOptions);
  };

  // 사업자등록번호 형식으로 변환
  function formatBusinessNumber(businessNum) {
    // 입력된 문자열에서 숫자만 추출
    const numberOnly = businessNum.replace(/\D/g, "");
    // 정규식을 사용하여 원하는 형식으로 변환
    const formattedNumber = numberOnly.replace(
      /(\d{3})(\d{2})(\d{5})/,
      "$1-$2-$3",
    );
    return formattedNumber;
  }

  // 전화번호 형식으로 변환
  function formatPhoneNumber(hotelCall) {
    // 입력된 문자열에서 숫자만 추출
    const numberOnly = hotelCall.replace(/\D/g, "");
    // 정규식을 사용하여 원하는 형식으로 변환
    const formattedNumber = numberOnly.replace(
      /(\d{3})(\d{4})(\d{4})/,
      "$1-$2-$3",
    );
    return formattedNumber;
  }

  // 취소 버튼
  const handleClickCancel = () => {
    navigate(`/admin/hotelinfo`);
  };

  // 전송 버튼
  const handleClickSubmit = () => {
    // 호텔 이미지, 옵션, 설명을 전송
    const newPostData = {
      dto: {
        hotelDetailInfo: detailInfo,
        optionList: [selectedOptions],
      },
      hotelPics: [previewImg],
    };
    setPostData(newPostData);
    postJwtHotelModifyAPI(setPostData);
  };

  return (
    <>
      <HotelModifyWrap>
        {/* 버튼 포함 */}
        <HotelModifyDiv>
          {/* 호텔 수정 카드 */}
          <HotelModifyCard>
            <HotelModifyCardTitle>
              <p>호텔 수정</p>
            </HotelModifyCardTitle>

            <HotelModifyContentDiv>
              <HotelModifyTitle>
                <p>사업자등록번호</p>
                <p>호텔 이름</p>
                <p>대표자 성명</p>
                <p>호텔 전화번호</p>
                <p>호텔 주소</p>
                <HotelModifyTitlePic>
                  <p>호텔 이미지 첨부</p>
                </HotelModifyTitlePic>
                <p>호텔 옵션</p>
                <HotelModifyTitleDesc>
                  <p>호텔 설명</p>
                </HotelModifyTitleDesc>
              </HotelModifyTitle>
              <HotelModifyContent>
                <p>{formatBusinessNumber(hotelInfo.businessNum)}</p>
                <p>{hotelInfo.hotelNm}</p>
                <p>{hotelInfo.businessName}</p>
                <p>{formatPhoneNumber(hotelInfo.hotelCall)}</p>
                <p>{hotelInfo.hotelFullAddress}</p>

                <HotelPicDiv>
                  {hotelInfo.hotelPics.map((pic, index) => (
                    <React.Fragment key={index}>
                      {previewImg === index ? (
                        <HotelPic src={pic} alt="선택된 이미지 미리보기" />
                      ) : (
                        <HotelPic
                          src={`http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/${pic}`}
                          alt="기존 이미지 미리보기"
                        />
                      )}
                    </React.Fragment>
                  ))}

                  <HotelPicAddButtonDiv>
                    <label htmlFor="picUpload">
                      <HotelPicAddButton
                        type="button"
                        onClick={() => {
                          document.getElementById("picUpload").click();
                        }}
                      >
                        +
                      </HotelPicAddButton>
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
                  </HotelPicAddButtonDiv>
                </HotelPicDiv>

                <HotelOption>
                  {options.map(option => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        value={option}
                        checked={
                          selectedOptions.includes(option) ||
                          hotelInfo.optionList.some(
                            item =>
                              item.optionPk === options.indexOf(option) + 1,
                          )
                        }
                        onChange={() => handleOptionChange(option)}
                      />
                      {option}
                    </label>
                  ))}
                </HotelOption>
                <textarea
                  defaultValue={hotelInfo.hotelDetailInfo}
                  onChange={e => setDetailInfo(e.target.value)}
                />
              </HotelModifyContent>
            </HotelModifyContentDiv>
          </HotelModifyCard>
          <ButtonDiv>
            <button onClick={() => handleClickCancel()}>취소</button>
            <button onClick={() => handleClickSubmit()}>저장</button>
          </ButtonDiv>
        </HotelModifyDiv>
      </HotelModifyWrap>
    </>
  );
};

export default HotelModifyPage;

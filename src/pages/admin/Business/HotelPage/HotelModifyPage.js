import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getJwtHotelInfoAPI,
  putJwtHotelModifyAPI,
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
  HotelPicDeleteButton,
  HotelPicDiv,
  HotelPicsDiv,
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
  dto: {
    hotelDetailInfo: "",
    optionList: [],
    deletePicsPk: [],
  },
  hotelPics: [],
};

const optionsInit = [
  { optionPk: 1, optionNm: "수영장", optionActive: false },
  { optionPk: 2, optionNm: "운동장", optionActive: false },
  { optionPk: 3, optionNm: "수제식", optionActive: false },
  { optionPk: 4, optionNm: "셔틀운행", optionActive: false },
  { optionPk: 5, optionNm: "프로그램", optionActive: false },
  { optionPk: 6, optionNm: "산책", optionActive: false },
  { optionPk: 7, optionNm: "미용", optionActive: false },
];

// 1. 상세 내용 만 수정후 전송후 되는지 (파일 추가없이 전송시)
// 2. 기존 이미지 목록 일부만 삭제후 전송후 되는지 (파일 추가없이 전송시)
// 3. 기존 이미지 목록 일부만 삭제후 전송후 되는지 (파일 추가없이 전송시)
// 4. 옵션 값 숫자로 전달하도록 수정하기
// 5. 파일 추가 후 보내기 (전송시)

const HotelModifyPage = () => {
  const navigate = useNavigate();

  // 호텔 정보 상태
  const [hotelInfo, setHotelInfo] = useState(initHotelInfo);

  // 호텔 이미지 상태
  const [previewImg, setPreviewImg] = useState([]);
  // 삭제할 호텔 이미지 상태
  const [deletePic, setDeletePic] = useState([]);
  // 추가할 호텔 이미지 상태
  const [addPic, setAddPic] = useState([]);

  const [options, setOptions] = useState(optionsInit);
  // 호텔 옵션 상태
  const [selectedOptions, setSelectedOptions] = useState([]);
  // 호텔 설명 상태
  const [detailInfo, setDetailInfo] = useState("");
  // API 전송될 데이터 상태
  const [postData, setPostData] = useState(initPostData);

  // 화면 초기 불러오기
  useEffect(() => {
    // Axios Get으로 호텔 정보 가져오기
    const getHotelInfo = async () => {
      const data = await getJwtHotelInfoAPI(setHotelInfo);
      setHotelInfo(data);
      setDetailInfo(data.hotelDetailInfo);
      // 옵션값을 이용한 처리
      const tempArr = [...options];
      data.optionList.forEach(item => {
        const index = item.optionPk - 1;
        if (index >= 0 && index < tempArr.length) {
          tempArr[index].optionActive = true;
        }
      });
      setSelectedOptions(tempArr);
      //========== 옵션 인덱스를 이용한처리
    };
    getHotelInfo();
  }, []);

  useEffect(() => {}, [detailInfo]);

  // 서버 전송용 파일 보관 state
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState([]);

  // 호텔 이미지 선택
  const handleChangeUploadPic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(prevImgs => [...prevImgs, tempUrl]);

      //  파일 보관하기
      setUploadImgBeforeFile(prevFile => [...prevFile, file]);
    }
  };

  // 호텔 이미지 삭제
  const handleClickDeletePic = index => {
    const selectedPic = hotelInfo.hotelPics[index];
    const deleteData = {
      ...selectedPic,
      hotelPicPk: selectedPic.hotelPicPk,
    };
    // console.log("삭제할 파일명 :", deleteData.hotelPicPk);
    setDeletePic(prevDeletePic => [...prevDeletePic, deleteData.hotelPicPk]);
    // console.log("삭제 요청할 파일명 :", deletePic);

    // 삭제할 이미지를 제외한 목록
    const updatedPics = hotelInfo.hotelPics.filter((_, i) => i !== index);

    // 이미지 목록 업데이트
    setHotelInfo({
      ...hotelInfo,
      hotelPics: updatedPics,
    });
  };

  // 호텔 옵션 선택
  const handleOptionChange = _index => {
    const tempArr = [...options];
    tempArr[_index].optionActive = !tempArr[_index].optionActive;
    setSelectedOptions(tempArr);
    // const updatedOptions = selectedOptions.includes(option)
    //   ? selectedOptions.filter(selected => selected !== option)
    //   : [...selectedOptions, option];
    // setSelectedOptions(updatedOptions);
    // console.log("옵션 상태", selectedOptions);
  };

  const handleDetailInfoChange = e => {
    setDetailInfo(e.target.value);
  };

  // 사업자등록번호 형식으로 변환
  function formatBusinessNumber(businessNum) {
    const numberOnly = businessNum.replace(/\D/g, "");
    const formattedNumber = numberOnly.replace(
      /(\d{3})(\d{2})(\d{5})/,
      "$1-$2-$3",
    );
    return formattedNumber;
  }

  // 전화번호 형식으로 변환
  function formatPhoneNumber(hotelCall) {
    const numberOnly = hotelCall.replace(/\D/g, "");
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
  const handleClickSubmit = async () => {
    const formData = new FormData();

    const sendOptList = options.filter(item => {
      if (item.optionActive === true) {
        return item.optionPk;
      }
    });
    const sendOptionData = sendOptList.map(item => item.optionPk);
    const sendData = {
      hotelDetailInfo: detailInfo,
      optionList: sendOptionData,
      deletePicsPk: deletePic,
    };
    console.log("================ dto 에 담은 보낼 데이터 ", sendData);

    const dto = new Blob(
      [JSON.stringify(sendData)],
      // JSON 형식으로 설정
      { type: "application/json" },
    );

    formData.append("dto", dto);

    const imagePromises = uploadImgBeforeFile.map((image, index) => {
      formData.append("hotelPics", image);
    });
    // 만약 변동이 없다면
    if (imagePromises.length === 0) {
      formData.append("hotelPics", []);
    }
    // await Promise.all(imagePromises);

    // console.log("post 요청할 데이터 :", postData);
    putJwtHotelModifyAPI(formData);
    navigate(`/admin/hotelinfo`);
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

                <HotelPicsDiv>
                  {hotelInfo.hotelPics.map((pic, index) => (
                    <HotelPicDiv key={index}>
                      {/* 기존 이미지 미리보기 */}
                      <HotelPic
                        src={`http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/${pic.hotelPic}`}
                        alt="기존 이미지 미리보기"
                      />
                      <HotelPicDeleteButton
                        onClick={() => handleClickDeletePic(index)}
                      >
                        x
                      </HotelPicDeleteButton>
                    </HotelPicDiv>
                  ))}

                  {previewImg.map((url, index) => (
                    <HotelPicDiv key={index}>
                      {/* 새로 추가된 이미지 미리보기 */}
                      <HotelPic src={url} alt="선택된 이미지 미리보기" />
                      <HotelPicDeleteButton
                        onClick={() => handleClickDeletePic(index)}
                      >
                        x
                      </HotelPicDeleteButton>
                    </HotelPicDiv>
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
                </HotelPicsDiv>

                <HotelOption>
                  {options.map((option, index) => (
                    <label key={option.optionPk}>
                      <input
                        type="checkbox"
                        value={option.optionPk}
                        checked={option.optionActive}
                        onChange={() => handleOptionChange(index)}
                      />
                      {option.optionNm}
                    </label>
                  ))}
                </HotelOption>
                <textarea
                  defaultValue={hotelInfo.hotelDetailInfo}
                  onChange={handleDetailInfoChange}
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

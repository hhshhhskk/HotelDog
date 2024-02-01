import React, { useState } from "react";
import MainSearchFrom from "../../components/Main/MainSearchFrom";
import TopButton from "../../components/Main/TopButton";
import {
  AdListDiv,
  AdText,
  AdTitle,
  FilterListDiv,
  FilterText,
  FilterTitle,
  HotelCardDiv,
  HotelListDiv,
  HotelPlusBt,
  HotelPlusBtDiv,
  MainPageDiv,
  VisualDiv,
  VisualForm,
  VisualImg,
  VisualInner,
  VisualText,
} from "../../styles/MainPageStyle/mainPageStyle";
import HotelCardForm from "../../components/Common/HotelCardForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hotelListAPI } from "../../api/Main/HotelApi";

// 호텔 전체 리스트 데이터 형식
const initHotellist = {
  hotel_advertise_list: [
    {
      star: 0,
      price: "",
      hotel_pk: 0,
      hotel_nm: "",
      address_name: "",
      hotel_pic: "",
      discount_per: 0,
      book_mark: 0,
      review_count: 0,
    },
  ],
  hotel_list: [
    {
      star: 0,
      price: "",
      hotel_pk: 0,
      hotel_nm: "",
      address_name: "",
      hotel_pic: "",
      discount_per: 0,
      book_mark: 0,
      review_count: 0,
    },
  ],
};

const MainPage = () => {
  // 전체 호텔 리스트 useState
  const [hotelListData, setHotelListData] = useState(initHotellist);

  // 전체 호텔 리스트 가져오기
  const getHotelList = async () => {
    // hotelListAPI(setHotelListData);
    try {
      const data = await hotelListAPI(/* 여기에 필요한 값들 전달 */);
      setHotelListData(data);
    } catch (error) {
      console.log(error);
      // 에러 처리 로직 추가
    }
  };

  // 초기 화면 불러오기
  useEffect(() => {
    getHotelList();
  }, []);

  const navigate = useNavigate();

  // 필터 폼 클릭 시 스크롤 이동
  const handleClickForm = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // 정렬방식에 대한 useState, 초기값은 추천순
  const [selectSorting, setSelectSorting] = useState("추천순");

  //  정렬방식(별점순, 리뷰순) 선택
  const handleChangeSorting = e => {
    const selectedValue = e.target.value;
    setSelectSorting(selectedValue);
    filterData(selectedValue);
  };

  // 호텔리스트 정렬방식(별점순, 리뷰순) 필터
  const filterData = selectedValue => {
    // 선택된 값을 이용해서 데이터 필터링
    console.log("선택된 값 :", selectedValue);
  };

  // 자식 컴포넌트 즉, calendar 에서 알려줘야 다른 컴포넌트에 전달할 수 있다.
  const [reserveDay, setReserveDay] = useState({ startDay: "", endDay: "" });
  const changeSelectDay = (_st, _ed) => {
    console.log("시작", _st);
    console.log("완료", _ed);

    setReserveDay(prev => {
      // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
      return { startDay: _st, endDay: _ed };
    });
  };
  useEffect(() => {
    console.log(reserveDay);
  }, [reserveDay]);

  const handleSelectGo = _hotel_pk => {
    console.log("상세 페이지 보기?? ", _hotel_pk);
    console.log(reserveDay);
    // useNavigate 를 이용한 이동과 정보를 함께 보내기(state)
    navigate(`/hoteldetail/${_hotel_pk}`, { state: { day: reserveDay } });
  };

  return (
    <MainPageDiv>
      <VisualDiv>
        <VisualImg>
          <img src={`${process.env.PUBLIC_URL}/images/main.png`} alt="" />
        </VisualImg>

        <VisualInner>
          <VisualText>
            <span>
              나의 반려견에게 <br />
              최고의 하루를 선물하세요
            </span>
          </VisualText>

          {/* 검색 */}
          <VisualForm onClick={handleClickForm}>
            <MainSearchFrom changeSelectDay={changeSelectDay} />
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔리스트 */}
      <HotelListDiv>
        {/* 광고호텔 */}
        <AdListDiv>
          <AdText>
            <AdTitle>지금, 🔥 HOTDOG</AdTitle>
            <span>핫한 광고 상품을 추천드립니다!</span>
          </AdText>
          <HotelCardDiv>
            {hotelListData.hotel_advertise_list.map((hotel, index) => (
              <div key={index}>
                <HotelCardForm hotel={hotel} handleSelectGo={handleSelectGo} />
              </div>
            ))}
          </HotelCardDiv>
        </AdListDiv>

        {/* 필터호텔 */}
        <FilterListDiv>
          <FilterText>
            <FilterTitle>호텔 리스트 </FilterTitle>
            <span>등록된 주소 기준으로 보여드립니다</span>

            {/* 필터호텔 정렬방식 */}
            <form>
              <select value={selectSorting} onChange={handleChangeSorting}>
                <option value="추천순">추천순</option>
                <option value="별점순">별점순</option>
                <option value="리뷰순">리뷰순</option>
              </select>
            </form>
          </FilterText>
          <HotelCardDiv>
            {hotelListData.hotel_list.map((hotel, index) => (
              <div key={index}>
                <HotelCardForm hotel={hotel} handleSelectGo={handleSelectGo} />
              </div>
            ))}
          </HotelCardDiv>
          {/* 호텔 더 불러오기 버튼 */}
          <HotelPlusBtDiv>
            <HotelPlusBt>더 불러오기</HotelPlusBt>
            <img
              src={`${process.env.PUBLIC_URL}/images/hotelPlusArrow2.svg`}
              alt=""
            />
          </HotelPlusBtDiv>
        </FilterListDiv>
      </HotelListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;

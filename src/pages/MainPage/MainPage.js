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
import { postHotelListAPI, postJwtHotelListAPI } from "../../api/Main/HotelApi";
import useCustomLogin from "../../hooks/useCustomLogin";

// 메인페이지 POST 데이터 형식
const initDataList = {
  address: "",
  search: "",
  main_filter: 0,
  from_date: "",
  to_date: "",
  dog_info: [],
  hotel_option_pk: [],
  filter_type: 0,
};

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
  // 로그인 상태 불러오기
  const { isLogin } = useCustomLogin();

  // POST 데이터 useState
  const [hotelListData, setHotelListData] = useState(initDataList);
  // 전체 호텔 리스트 useState
  const [getServerListData, setGetServerListData] = useState(initHotellist);
  // 검색 폼 데이터 관리
  const [saveSearchData, setSaveSearchData] = useState(null);
  // 초기 화면 불러오기
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log("바뀐데이터", saveSearchData);
    if (saveSearchData) {
      setHotelListData(saveSearchData);
    }
  }, [saveSearchData]);
  // 전체 호텔 리스트 가져오기
  const getHotelList = async () => {
    // hotelListAPI(setHotelListData);
    try {
      const LoginState = isLogin ? postJwtHotelListAPI : postHotelListAPI;
      const data = await LoginState({
        page: 1,
        setHotelListData: hotelListData,
        // setHotelListData: hotelListData,
      });
      console.log(data);
      setGetServerListData(data);
    } catch (error) {
      console.log(error);
      // 에러 처리 로직 추가
    }
  };

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
    // setFilterValue
    console.log(selectedValue);
    setSelectSorting(selectedValue);
    filterData(selectedValue);
  };

  // 호텔리스트 정렬방식(별점순, 리뷰순) 필터
  const filterData = selectedValue => {
    // 선택된 값을 이용해서 데이터 필터링
    // console.log("선택된 값 :", selectedValue);
    // console.log("변경전 후 데이터 ", hotelListData);
    const nowData = { ...hotelListData, filter_type: parseInt(selectedValue) };
    // console.log("선택 후 바뀐 데이터 ", nowData);
    setHotelListData(nowData);
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
    // console.log(reserveDay);
  }, [reserveDay]);

  const handleSelectGo = _hotel_pk => {
    console.log("상세 페이지 보기?? ", _hotel_pk);
    console.log(reserveDay);
    // useNavigate 를 이용한 이동과 정보를 함께 보내기(state)
    navigate(`/hoteldetail/${_hotel_pk}`, { state: { day: reserveDay } });
  };

  // 호텔 리스트 페이지네이션
  const handleClickLoad = async () => {
    try {
      const nextPage = page + 1;
      // 다음 페이지 데이터를 가져오기
      const LoginState = isLogin ? postJwtHotelListAPI : postHotelListAPI;
      const data = await LoginState({
        page: nextPage,
        setHotelListData: hotelListData,
      });
      // 현재 호텔 리스트 데이터와 새로운 데이터를 합치기
      const prevData = { ...getServerListData };

      const mergedData = {
        hotel_advertise_list: data.hotel_advertise_list,
        hotel_list: [...prevData.hotel_list, ...data.hotel_list],
      };
      setGetServerListData(mergedData);
      // 페이지 번호 업데이트
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      // 에러 처리 로직 추가
    }
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
            <MainSearchFrom
              changeSelectDay={changeSelectDay}
              setSaveSearchData={setSaveSearchData}
            />
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
            {getServerListData.hotel_advertise_list?.map((hotel, index) => (
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
                <option value="0">추천순</option>
                <option value="1">별점순</option>
                <option value="2">리뷰순</option>
              </select>
            </form>
          </FilterText>
          <HotelCardDiv>
            {getServerListData.hotel_list?.map((hotel, index) => (
              <div key={index}>
                <HotelCardForm hotel={hotel} handleSelectGo={handleSelectGo} />
              </div>
            ))}
          </HotelCardDiv>
          {/* 호텔 더 불러오기 버튼 */}
          <HotelPlusBtDiv onClick={handleClickLoad}>
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

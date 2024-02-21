import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postHotelListAPI, postJwtHotelListAPI } from "../../api/Main/HotelApi";
import HotelCardForm from "../../components/Common/HotelCardForm";
import MainSearchFrom from "../../components/Main/MainSearchFrom";
import TopButton from "../../components/Main/TopButton";
import useCustomLogin from "../../hooks/useCustomLogin";
import {
  postHotelListAsync,
  postJwtHotelListAsync,
} from "../../redux/searchSlice";
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

// POST 데이터 형식
const initPostData = {
  address: "",
  search: "",
  main_filter: 0,
  from_date: "",
  to_date: "",
  dog_info: [],
  hotel_option_pk: [],
  filter_type: 0,
};

// 호텔 리스트 데이터 형식
const initHotellist = {
  hotel_advertise_list: [
    // {
    //   star: 0,
    //   price: "",
    //   hotel_pk: 0,
    //   hotel_nm: "",
    //   address_name: "",
    //   hotel_pic: "",
    //   discount_per: 0,
    //   book_mark: 0,
    //   review_count: 0,
    // },
  ],
  hotel_list: [
    // {
    //   star: 0,
    //   price: "",
    //   hotel_pk: 0,
    //   hotel_nm: "",
    //   address_name: "",
    //   hotel_pic: "",
    //   discount_per: 0,
    //   book_mark: 0,
    //   review_count: 0,
    // },
  ],
};

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useCustomLogin();

  // 리덕스 보관된 state
  const hotelListData = useSelector(state => state.searchSlice);

  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);

  // POST할 데이터 useState
  const [postData, setPostData] = useState(initPostData);

  // 필터 데이터 ustState
  const [saveFilterData, setSaveFilterData] = useState(null);

  // 호텔 리스트 useState
  // const [_, setHotelListData] = useState(initHotellist);

  // 호텔 리스트 페이지 useState
  const [page, setPage] = useState(1);
  // 호텔 리스트 정렬방식 useState
  const [selectSorting, setSelectSorting] = useState("추천순");
  // 필터된 옵션 useState
  const [showOption, setShowOption] = useState(false);

  // 선택한 날짜 useState
  const [reserveDay, setReserveDay] = useState({
    startDay: "",
    endDay: "",
  });
  const [reserveDogSize, setReserveDogSize] = useState([]);

  // 필터 폼 클릭 시 스크롤 이동
  const handleClickFilterForm = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
    setShowOption(true);
  };

  // 전체 호텔 리스트 가져오기
  const totalHotelList = () => {
    try {
      let filter = {};
      if (saveFilterData) {
        // console.log("필터링 데이터", saveFilterData);
        filter = saveFilterData;
      } else {
        // console.log("기본 데이터", postData);
        filter = postData;
      }

      if (isLogin) {
        // 만약 로그인이 되었다면
        dispatch(postJwtHotelListAsync({ page: 1, setPostData: filter }));
      } else {
        // 만약 로그인이 아니라면
        dispatch(postHotelListAsync({ page: 1, setPostData: filter }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalHotelList();
  }, []);

  // MainSearchForm에서 받아오는 데이터
  const handleChangeFilter = _formData => {
    // console.log("여기에요.", _formData);
    setSaveFilterData(_formData);

    if (isLogin) {
      // 만약 로그인이 되었다면
      dispatch(postJwtHotelListAsync({ page: 1, setPostData: _formData }));
    } else {
      // 만약 로그인이 아니라면
      dispatch(postHotelListAsync({ page: 1, setPostData: _formData }));
    }

    // totalHotelList();
  };

  //  정렬방식(추천순, 별점순, 리뷰순) 선택
  const handleChangeSorting = e => {
    // console.log("보관된것=====================", saveFilterData);
    const selectedValue = e.target.value;
    // console.log("정렬방식 : ", selectedValue);
    setSelectSorting(selectedValue);
    let nowData = { ...saveFilterData, filter_type: parseInt(selectedValue) };
    dispatch(postHotelListAsync({ page: 1, setPostData: nowData }));
  };

  // 자식 컴포넌트 즉, calendar 에서 알려줘야 다른 컴포넌트에 전달할 수 있다.
  const changeSelectDay = (_sd, _ed) => {
    setReserveDay(prev => {
      // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
      return { startDay: _sd, endDay: _ed };
    });
    setStartDay(_sd);
    setEndDay(_ed);
  };

  // 강아지 사이즈 변경시 값 보관/전달
  // size 전달 자료는 일단 보류
  const changeDogsize = _dogInfo => {
    console.log("엄마가 받았어요. : ", _dogInfo);
    setReserveDogSize(_dogInfo);
  };

  useEffect(() => {
    // console.log(reserveDay);
  }, [reserveDay]);

  // 호텔 상세페이지 이동
  const handleClickHotel = _hotel_pk => {
    // useNavigate 를 이용한 이동과 정보를 함께 보내기(state)
    navigate(`/hoteldetail/${_hotel_pk}`, {
      state: { day: reserveDay, dogSizeInfo: reserveDogSize },
    });
  };

  // 호텔 리스트 페이지네이션
  // const handleClickPage = async () => {
  //   try {
  //     // 다음 페이지 데이터를 가져오기
  //     const nextPage = page + 1;
  //     // let nowData = { saveFilterData, page: nextPage };
  //     dispatch(
  //       postHotelListAsync({ page: nextPage, setPostData: saveFilterData }),
  //     );
  //     // if (isLogin) {
  //     //   // 만약 로그인이 되었다면
  //     //   dispatch(postJwtHotelListAsync({ page: 1, setPostData: _formData }));
  //     // } else {
  //     //   // 만약 로그인이 아니라면
  //     //   dispatch(postHotelListAsync({ page: 1, setPostData: _formData }));
  //     // }
  //     const LoginState = isLogin ? postJwtHotelListAPI : postHotelListAPI;
  //     const data = await LoginState({
  //       page: nextPage,
  //       setPostData: postData,
  //     });
  //     // 현재 호텔 리스트 데이터와 새로운 데이터를 합치기
  //     const prevData = { ...hotelListData };
  //     const mergedData = {
  //       hotel_advertise_list: data.hotel_advertise_list,
  //       hotel_list: [...prevData.hotel_list, ...data.hotel_list],
  //     };
  //     // setHotelListData(mergedData);
  //     // 페이지 번호 업데이트
  //     setPage(nextPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleClickPage = async () => {
    try {
      // 다음 페이지 데이터를 가져오기
      const nextPage = page + 1;

      // 현재 saveFilterData와 nextPage를 사용하여 호텔 리스트 데이터 요청
      const data = await (isLogin ? postJwtHotelListAPI : postHotelListAPI)({
        page: nextPage,
        setPostData: saveFilterData,
      });

      // 현재 호텔 리스트 데이터와 새로운 데이터를 합치기
      const prevData = { ...hotelListData };
      const mergedData = {
        hotel_advertise_list: data.hotel_advertise_list,
        hotel_list: [...prevData.hotel_list, ...data.hotel_list],
      };

      // 호텔 리스트 업데이트
      // setHotelListData(mergedData);

      // 페이지 번호 업데이트
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainPageDiv>
      <VisualDiv>
        <VisualImg>
          <img src={`${process.env.PUBLIC_URL}/images/main2.svg`} alt="" />
        </VisualImg>

        <VisualInner>
          <VisualText>
            {/* <span>여기에요.{state?.hotel_list.length}</span> */}
            <span>
              나의 반려견에게 <br />
              최고의 하루를 선물하세요
            </span>
          </VisualText>

          {/* 필터 */}
          <VisualForm onClick={handleClickFilterForm}>
            <MainSearchFrom
              changeSelectDay={changeSelectDay}
              changeDogsize={changeDogsize}
              handleChangeFilter={handleChangeFilter}
              // setSaveFilterData={setSaveFilterData}
              startDay={startDay}
              endDay={endDay}
            />
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔리스트 */}
      <HotelListDiv>
        {/* {showOption && (
          <div>
            <div>
              <div>
                <span>사이즈 / 마리</span>
              </div>
              <div>
                <span>소형견</span>
                <span>1</span>
              </div>
              <button>소형견 1</button>
            </div>

            <div>
              <span>필터</span>
              <div>수영장</div>
            </div>
          </div>
        )} */}

        {/* 광고호텔 */}
        <AdListDiv>
          <AdText>
            <AdTitle>지금, 🔥 HOTDOG</AdTitle>
            <span>핫한 광고 상품을 추천드립니다!</span>
          </AdText>
          <HotelCardDiv>
            {hotelListData?.hotel_advertise_list?.map((hotel, index) => (
              <div key={index}>
                <HotelCardForm
                  hotel={hotel}
                  handleClickHotel={handleClickHotel}
                />
              </div>
            ))}
          </HotelCardDiv>
        </AdListDiv>

        {/* 호텔 */}
        <FilterListDiv>
          <FilterText>
            <FilterTitle>호텔 리스트 </FilterTitle>
            <span>등록된 주소를 기반하여 보여드립니다 : )</span>

            {/* 정렬방식 */}
            <form>
              <select value={selectSorting} onChange={handleChangeSorting}>
                <option value="0">추천순</option>
                <option value="1">별점순</option>
                <option value="2">리뷰순</option>
              </select>
            </form>
          </FilterText>
          <HotelCardDiv>
            {hotelListData?.hotel_list?.map((hotel, index) => (
              <div key={index}>
                <HotelCardForm
                  hotel={hotel}
                  handleClickHotel={handleClickHotel}
                />
              </div>
            ))}
          </HotelCardDiv>
          {/* 페이지네이션 버튼 */}
          <HotelPlusBtDiv onClick={handleClickPage}>
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

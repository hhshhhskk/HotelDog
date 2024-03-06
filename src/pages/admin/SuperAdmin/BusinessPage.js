import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AntdPagination from "../../../components/admin/Common/AntdPagination";
import { businessUserGetwApi } from "../../../api/superadmin/superAdminApi";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  background-color: #eee;
  width: 1400px; // 1400px
  height: 900px; // 900px
  padding: 80px 100px;
`;

const ContentTop = styled.div`
  height: 30px;
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 50%;
  height: 30px;

  color: #323232;
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SearchBox = styled.div`
  position: relative;
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: right;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 4px 40px 4px 11px; // 상 우 하 좌

  border-radius: 50px;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.5);
`;

const SearchBtn = styled.div`
  position: absolute;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const SearchBtnImg = styled.img`
  width: 15px;
  height: 15px;
`;

const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-spacing: 0;
  border-collapse: collapse;
  color: #000;
`;

const Thead = styled.thead`
  background-color: #323232;
  width: 100%;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

const Th = styled.th`
  width: ${props =>
    props.idx === 0
      ? "50px"
      : props.idx === 1
      ? "240px"
      : props.idx === 2
      ? "200px"
      : props.idx === 3
      ? "250px"
      : props.idx === 4
      ? "460px"
      : "100px"};
  border: 1px solid #b9b9b9;
`;

const Tbody = styled.tbody`
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const Tr = styled.tr`
  width: 100%;
  height: 40px;
  text-align: center;
`;

const Td = styled.td`
  width: ${props =>
    props.idx === 0
      ? "50px"
      : props.idx === 1
      ? "240px"
      : props.idx === 2
      ? "200px"
      : props.idx === 3
      ? "250px"
      : props.idx === 4
      ? "460px"
      : "100px"};
  border: 1px solid #b9b9b9;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 55px;
`;

const BusinessPage = () => {
  let dummyData = {};

  const dummy1 = {
    data: [
      {
        number: 1,
        hotelName: "멍멍호텔",
        ceo: "김사장",
        phoneNum: "01012345678",
        address: "서울시 강남구 강남대로 123번길 45",
      },
      {
        number: 2,
        hotelName: "왈왈호텔",
        ceo: "이대표",
        phoneNum: "01023456789",
        address: "서울시 강북구 강북대로 456번길 78",
      },
      {
        number: 3,
        hotelName: "미야무라리조트",
        ceo: "이사장",
        phoneNum: "01034567890",
        address: "서울시 서초구 반포대로 789번길 12",
      },
      {
        number: 4,
        hotelName: "츄츄펜션",
        ceo: "박대표",
        phoneNum: "01045678901",
        address: "서울시 송파구 올림픽로 345번길 23",
      },
      {
        number: 5,
        hotelName: "멍뭉모텔",
        ceo: "최사장",
        phoneNum: "01056789012",
        address: "서울시 강서구 양천로 678번길 34",
      },
      {
        number: 6,
        hotelName: "미아리아파트먼트",
        ceo: "이대리",
        phoneNum: "01067890123",
        address: "서울시 구로구 경인로 789번길 56",
      },
      {
        number: 7,
        hotelName: "왈왈리조트",
        ceo: "김대표",
        phoneNum: "01078901234",
        address: "서울시 관악구 신림로 901번길 78",
      },
      {
        number: 8,
        hotelName: "모야모텔",
        ceo: "정사장",
        phoneNum: "01089012345",
        address: "서울시 동작구 상도로 123번길 90",
      },
      {
        number: 9,
        hotelName: "행복한호텔",
        ceo: "백대표",
        phoneNum: "01090123456",
        address: "서울시 마포구 와우산로 234번길 12",
      },
      {
        number: 10,
        hotelName: "멍멍리조트",
        ceo: "한대표",
        phoneNum: "01001234567",
        address: "서울시 중구 명동길 345번길 67",
      },

      {
        number: 11,
        hotelName: "왈왈펜션",
        ceo: "성사장",
        phoneNum: "01023456789",
        address: "서울시 종로구 북촌로 567번길 89",
      },
      {
        number: 12,
        hotelName: "멍멍모텔",
        ceo: "류대표",
        phoneNum: "01034567890",
        address: "서울시 중랑구 신내로 678번길 90",
      },
      {
        number: 13,
        hotelName: "왈왈모텔",
        ceo: "김사장",
        phoneNum: "01045678901",
        address: "서울시 성북구 화랑로 123번길 45",
      },
      {
        number: 14,
        hotelName: "멍멍아파트먼트",
        ceo: "이대리",
        phoneNum: "01056789012",
        address: "서울시 동대문구 천호대로 234번길 56",
      },
      {
        number: 15,
        hotelName: "왈왈아파트먼트",
        ceo: "박대리",
        phoneNum: "01067890123",
        address: "서울시 도봉구 도봉로 345번길 78",
      },
    ],
  };

  const dummy2 = {
    data: [
      {
        number: 16,
        hotelName: "미야리리조트",
        ceo: "최사장",
        phoneNum: "01078901234",
        address: "서울시 강동구 천호대로 567번길 90",
      },
      {
        number: 17,
        hotelName: "츄츄리조트",
        ceo: "이대표",
        phoneNum: "01089012345",
        address: "서울시 강남구 역삼로 123번길 12",
      },
      {
        number: 18,
        hotelName: "멍멍모텔",
        ceo: "김사장",
        phoneNum: "01001234567",
        address: "서울시 강북구 삼양로 234번길 34",
      },
      {
        number: 19,
        hotelName: "미야리펜션",
        ceo: "이대표",
        phoneNum: "01012345678",
        address: "서울시 강서구 양천로 345번길 56",
      },
      {
        number: 20,
        hotelName: "멍멍펜션",
        ceo: "박사장",
        phoneNum: "01023456789",
        address: "서울시 중구 장충로 456번길 78",
      },
      {
        number: 21,
        hotelName: "왈왈펜션",
        ceo: "김대표",
        phoneNum: "01034567890",
        address: "서울시 송파구 올림픽로 789번길 90",
      },
      {
        number: 22,
        hotelName: "츄츄모텔",
        ceo: "이사장",
        phoneNum: "01045678901",
        address: "서울시 강남구 테헤란로 123번길 34",
      },
      {
        number: 23,
        hotelName: "미야리모텔",
        ceo: "박대표",
        phoneNum: "01056789012",
        address: "서울시 서초구 강남대로 234번길 56",
      },
      {
        number: 24,
        hotelName: "멍멍리조트",
        ceo: "최사장",
        phoneNum: "01067890123",
        address: "서울시 관악구 남부순환로 345번길 78",
      },
      {
        number: 25,
        hotelName: "왈왈리조트",
        ceo: "이대리",
        phoneNum: "01078901234",
        address: "서울시 구로구 디지털로 123번길 90",
      },
      {
        number: 26,
        hotelName: "츄츄펜션",
        ceo: "김사장",
        phoneNum: "01089012345",
        address: "서울시 영등포구 국회대로 234번길 12",
      },
      {
        number: 27,
        hotelName: "미야리리조트",
        ceo: "박대표",
        phoneNum: "01001234567",
        address: "서울시 강동구 양재대로 345번길 34",
      },
      {
        number: 28,
        hotelName: "멍멍리조트",
        ceo: "이대리",
        phoneNum: "01012345678",
        address: "서울시 송파구 올림픽대로 456번길 56",
      },
      {
        number: 29,
        hotelName: "왈왈펜션",
        ceo: "최사장",
        phoneNum: "01023456789",
        address: "서울시 강서구 공항대로 567번길 78",
      },
      {
        number: 30,
        hotelName: "츄츄리조트",
        ceo: "김대표",
        phoneNum: "01034567890",
        address: "서울시 마포구 양화로 678번길 90",
      },
    ],
  };

  const dummy3 = {
    data: [
      {
        number: 31,
        hotelName: "미야리모텔",
        ceo: "이대리",
        phoneNum: "01045678901",
        address: "서울시 서대문구 연세로 789번길 12",
      },
      {
        number: 32,
        hotelName: "멍멍리조트",
        ceo: "박대표",
        phoneNum: "01056789012",
        address: "서울시 종로구 삼봉로 123번길 34",
      },
      {
        number: 33,
        hotelName: "왈왈펜션",
        ceo: "최사장",
        phoneNum: "01067890123",
        address: "서울시 중구 퇴계로 234번길 56",
      },
      {
        number: 34,
        hotelName: "츄츄리조트",
        ceo: "김대리",
        phoneNum: "01078901234",
        address: "서울시 성동구 왕십리로 345번길 78",
      },
      {
        number: 35,
        hotelName: "미야리펜션",
        ceo: "이사장",
        phoneNum: "01089012345",
        address: "서울시 강북구 노해로 456번길 90",
      },
    ],
  };

  const rows = ["번호", "아이디", "이름", "전화번호", "주소"];
  const [current, setCurrent] = useState(1);

  if (current === 1) {
    dummyData = dummy1;
  } else if (current === 2) {
    dummyData = dummy2;
  } else {
    dummyData = dummy3;
  }

  // dummyData와 totalData를 state로 관리합니다.
  const [initData, setInitData] = useState({});
  const [initTotalData, setInitTotalData] = useState(0);

  const [businessUserData, setBusinessUserData] = useState([]);
  const getBusinessData = async page => {
    try {
      const data = await businessUserGetwApi(page);
      console.log("사업자 데이터", data);
      setBusinessUserData(data);
    } catch (error) {
      console.log(error); // 에러를 콘솔에 출력합니다.
      // 서버 에러가 발생하면 빈 데이터를 설정합니다.
    }
  };

  const totalData = 30;

  console.log("총 페이지 수 ", businessUserData.totalPage);

  // 페이지가 변경될 때마다 데이터를 다시 불러옵니다.
  useEffect(() => {
    // getBusinessData(1); // 초기 페이지는 1로 설정합니다.
    getBusinessData(current); // 초기 페이지는 1로 설정합니다.
  }, [current]);

  // // totalData를 설정합니다.
  // useEffect(() => {
  //   setInitTotalData(businessUserData.total); // dummyData에서 total 값을 가져와 설정합니다.
  // }, [businessUserData]);

  console.log("test : ", businessUserData);

  return (
    <Wrapper>
      <Contents>
        <ContentTop>
          <Title>사업자 회원</Title>
          <SearchBox>
            <SearchInput type="text" />
            <SearchBtn>
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/admin/images/HotelList/searchIcon.svg`}
              />
            </SearchBtn>
          </SearchBox>
        </ContentTop>
        <Table>
          <Thead>
            <Tr>
              {rows.map((item, idx) => (
                <Th key={idx} idx={idx}>
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {businessUserData?.businessUserInfoList?.map(item => (
              <Tr key={item?.businessUserPk}>
                <Td style={{ width: "50px" }}>{item?.businessUserPk}</Td>
                <Td style={{ width: "240px" }}>{item?.userEmail}</Td>
                <Td style={{ width: "200px" }}>{item?.businessName}</Td>
                <Td style={{ width: "250px" }}>{item?.phoneNum}</Td>
                <Td style={{ width: "460px" }}>{item?.hotelAddress}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <PaginationBox>
          <AntdPagination
            totalData={totalData}
            current={current}
            setCurrent={setCurrent}
          />
        </PaginationBox>
      </Contents>
    </Wrapper>
  );
};

export default BusinessPage;

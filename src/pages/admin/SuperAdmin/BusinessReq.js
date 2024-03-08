import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AntdPagination from "../../../components/admin/Common/AntdPagination";
import {
  approveBusinessSignupApi,
  businessSignUpListApi,
} from "../../../api/admin/SuperAdmin/SuperAdminApi";

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
      : props.idx === 3
      ? "250px"
      : props.idx === 4
      ? "360px"
      : "150px"};
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
      : props.idx === 3
      ? "250px"
      : props.idx === 4
      ? "360px"
      : "150px"};
  border: 1px solid #b9b9b9;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 55px;
`;
const BusinessReq = () => {
  const [data, setData] = useState({
    hotelInfoList: [
      {
        hotelPk: 999,
        hotelNum: "999999999",
        hotelNm: "더미호텔",
        businessName: "김덤희",
        hotelFullAddress: "미국 샌프란시스코",
        hotelCall: "026626678",
        advertise: 0,
        approval: 0,
      },
    ],
    totalPage: 1,
  });

  const rows = ["번호", "호텔이름", "이름", "전화번호", "주소", "상태"];
  const [current, setCurrent] = useState(1);
  const [rendering, setRendering] = useState(false);
  useEffect(() => {
    // 비동기 함수 정의
    async function fetchData() {
      try {
        // 비동기 작업 수행
        const response = await businessSignUpListApi(current, setData);
        // 작업 완료 후 필요한 작업 수행
      } catch (error) {
        // 에러 처리
      }
    }

    fetchData();
  }, [current, rendering]);

  const totalData = data?.totalPage;
  // const totalData = 50;
  const pageSize = 15;

  const approveClicked = async hotelPk => {
    // console.log("hotelPk: ", hotelPk);
    let result = "";
    const answer = confirm("정말로 승인하시겠습니까?");
    if (answer) {
      result = await approveBusinessSignupApi(hotelPk);
    }

    if (result === 200) {
      setRendering(!rendering);
    }
  };

  return (
    <Wrapper>
      <Contents>
        <ContentTop>
          <Title>사업자 회원가입 요청</Title>
          <SearchBox>
            {/* <SearchInput type="text" />
            <SearchBtn>
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/admin/images/HotelList/searchIcon.svg`}
              />
            </SearchBtn> */}
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
            {data.hotelInfoList.map((item, idx) => (
              <Tr key={`row-${idx}`}>
                {[
                  "hotelPk",
                  "hotelNm",
                  "businessName",
                  "hotelCall",
                  "hotelFullAddress",
                  "approval",
                ].map((data, key) => {
                  return (
                    <Td key={`cell-${key}`} idx={key}>
                      {data === "approval" ? (
                        <button
                          onClick={() => {
                            approveClicked(item["hotelPk"]);
                          }}
                        >
                          승인하기
                        </button>
                      ) : (
                        item[data]
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <PaginationBox>
          <AntdPagination
            totalData={totalData}
            current={current}
            setCurrent={setCurrent}
            pageSize={pageSize}
          />
        </PaginationBox>
      </Contents>
    </Wrapper>
  );
};

export default BusinessReq;

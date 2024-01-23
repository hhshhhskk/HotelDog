import { useNavigate, useRouteError } from "react-router-dom";
import DefaultButton from "../../components/Common/DefaultButton";
import styled from "@emotion/styled";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

// 에러 페이지
export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  const ErrorPageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1000px;
    min-width: 1250px;
  `;

  const ErrorPageContents = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 750px;
    background-color: #fffaf0;
  `;

  const ErrorPageItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 750px;
    background-color: #fffaf0;
  `;

  const ErrorInfoDiv = styled.div`
    color: #654222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ErrorTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: 1.5px;
  `;

  const ErrorText = styled.span`
    font-size: 1.4rem;
    text-align: center;
    line-height: 2;
  `;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div> */}
      <Header />
      <ErrorPageDiv>
        {/* 내용 영역 */}
        <ErrorPageContents>
          {/* 내용상단 영역 */}
          <ErrorPageItem>
            {/* 이미지 영역 */}
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/errorIcon.svg`}
                alt=""
              />
            </div>
            {/* 텍스트 영역 */}
            <ErrorInfoDiv>
              <ErrorTitle>ERROR !</ErrorTitle>
              <ErrorText>
                죄송합니다. 페이지를 찾을 수 없습니다. <br />
                존재하지 않는 주소를 입력하셨거나, <br />
                요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
              </ErrorText>
            </ErrorInfoDiv>
            {/* 버튼 영역 */}
          </ErrorPageItem>
          <DefaultButton onClick={handleClick}>홈으로 돌아가기</DefaultButton>
        </ErrorPageContents>
      </ErrorPageDiv>

      <Footer />
    </>
  );
}

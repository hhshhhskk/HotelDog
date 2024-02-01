import React, { useState } from "react";
import {
  BoardBigText,
  BoardContent,
  BoardImg,
  BoardSmallText,
  BoardTitle,
  BoardTitleLeft,
  BoardTitleRight,
  BoardWrap,
} from "../../../styles/BoardPageStyle/boardStyle";
import Dog from "../../../components/Common/Dog";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { boardDeleteAPI, boardDetailAPI } from "../../../api/board/boardApi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BoardDetailTop = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 27px;

  display: flex;

  border-top: 0.5px solid #654222;
  border-bottom: 0.5px solid #654222;
  background-color: #fff;
`;

const DetailTopItem = styled.div`
  width: ${props =>
    props.idx === 0
      ? "70px"
      : props.idx === 2
      ? "575px"
      : props.idx === 3
      ? "180px"
      : "135px"};
  text-align: ${props =>
    props.idx === 2 ? "left" : props.idx === 3 ? "left" : "center"};

  color: #969696;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 32px;
`;

const BoardDetailContentBox = styled.div`
  width: 100%;
  min-height: 300px;
  margin-bottom: 18px;
  padding-top: 30px;
  padding-left: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 0.5px solid #654222;
  background-color: #fff;
`;

const DetailImgBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const BoardDetailImg = styled.img`
  width: 200px;
  height: 200px;
`;
const BoardDetailContent = styled.div`
  width: 95%;
  white-space: normal;
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
`;

const BoardDetailCommentBox = styled.div`
  background-color: #fffaf0;
  width: 100%;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const DetailCommentTop = styled.div`
  width: 1100px;
  height: 55px;

  display: flex;
  align-items: end;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(101, 66, 34, 0.3);
`;

const DetailCommentImg = styled.img`
  width: 16px;
  height: 13px;
  margin-right: 5px;
`;

const DetailCommentCnt = styled.div`
  display: flex;

  font-size: 1.4rem;
  color: #654222;
  font-weight: 600;

  margin-right: 18px;
`;

const DetailCommentFilter = styled.div`
  display: flex;

  font-size: 1.2rem;
  font-weight: 600;
`;

const CommentFilter = styled.div`
  color: ${props => (props.idx === props.filter ? "#654222" : "#969696")};

  padding-right: 9px;
  margin-right: 9px;

  border-right: ${props => (props.idx === 0 ? "1px solid #969696" : "none")};

  cursor: pointer;
`;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1100px;
  min-height: 70px;
  padding-left: 21px;
  border-bottom: 1px solid rgba(101, 66, 34, 0.3);
`;

const CommentDivTop = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
`;

const CommentNickName = styled.div`
  color: #654222;
  font-size: 1.4rem;
  font-weight: 600;

  margin-right: 7px;
`;

const CommentDate = styled.div`
  color: #969696;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Comment = styled.div`
  width: 100%;
  height: 50%;
  color: #654222;
  font-size: 1.4rem;
  font-weight: 400;
`;

const CommentInputDiv = styled.div`
  width: 100%;
  height: 110px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 1000px;
  height: 70px;
  margin-right: 10px;
  padding-left: 10px;
  color: #000;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #654222;
  background: #fff;
`;

const CommentBtn = styled.button`
  width: 70px;
  height: 70px;

  color: #fff;
  border-radius: 5px;
  border: none;

  background-color: #654222;
`;

const NavigateDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #654222;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 28px;
`;
const NavigateFirst = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const NavigateLast = styled(NavigateFirst)`
  gap: 7px;
  justify-content: right;
`;

const DetailBtn = styled.div`
  width: 60px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid #654222;
  background-color: #fff;
  cursor: pointer;
`;

const BoardDetailPage = () => {
  const topItem = [
    "boardPk",
    "카테고리",
    "title",
    "nickname",
    "createdAt",
    "boardViewCount",
  ];
  const navigate = useNavigate();
  const { boardPk } = useParams();
  const loginUserPk = useSelector(state => state.loginSlice.userPk);
  const [filter, setFilter] = useState(0);
  const [commentPage, setCommentPage] = useState(1);
  const { data, isLoading, isSuccess } = useQuery(
    ["boardDetail", boardPk, commentPage],
    () => {
      const fetchData = async () => {
        try {
          const result = await boardDetailAPI(boardPk, commentPage);
          return result;
        } catch {
          console.log("에러");
        }
      };

      return fetchData();
    },
    {
      enabled: Boolean(boardPk), // boardPk 값이 truthy일 때만 쿼리를 활성화
    },
  );

  let sortedComments = [];
  if (isSuccess) {
    const sortData = { ...data };
    sortedComments = [...sortData.comments].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return dateB - dateA;
    });
  }

  return (
    <BoardWrap>
      {isLoading || !isSuccess || (
        <BoardContent>
          <BoardTitle>
            <BoardTitleLeft>
              <BoardBigText>게시판</BoardBigText>
              <BoardSmallText>
                나의 강아지를 위한 커뮤니티 공간입니다.
              </BoardSmallText>
            </BoardTitleLeft>
            <BoardTitleRight>
              <Dog />
              <BoardImg
                src={`${process.env.PUBLIC_URL}/images/board/boardImg.svg`}
                alt=""
              />
            </BoardTitleRight>
          </BoardTitle>
          <BoardDetailTop>
            {topItem.map((item, idx) => {
              return (
                <DetailTopItem key={idx} idx={idx}>
                  {data?.[item]}
                </DetailTopItem>
              );
            })}
          </BoardDetailTop>
          <BoardDetailContentBox>
            {data?.pics[0] && (
              <DetailImgBox>
                {data.pics.map((pic, idx) => {
                  return (
                    <BoardDetailImg
                      key={idx}
                      src={`${process.env.REACT_APP_BOARD_IMAGE_URL}/${boardPk}/${pic}`}
                      alt=""
                    />
                  );
                })}
              </DetailImgBox>
            )}
            <BoardDetailContent>{data?.contents}</BoardDetailContent>
          </BoardDetailContentBox>
          <BoardDetailCommentBox>
            <DetailCommentTop>
              <DetailCommentImg
                src={`${process.env.PUBLIC_URL}/images/board/comment.svg`}
                alt=""
              />
              <DetailCommentCnt>댓글(1)</DetailCommentCnt>
              <DetailCommentFilter>
                {["등록순", "최신순"].map((data, idx) => {
                  return (
                    <CommentFilter
                      key={idx}
                      idx={idx}
                      filter={filter}
                      onClick={() => {
                        setFilter(idx);
                      }}
                    >
                      {data}
                    </CommentFilter>
                  );
                })}
              </DetailCommentFilter>
            </DetailCommentTop>
            {data?.comments[0] &&
              (filter === 0 ? data.comments : sortedComments)?.map(
                (item, idx) => {
                  return (
                    <CommentDiv key={idx}>
                      <CommentDivTop>
                        <CommentNickName>{item?.userNickname}</CommentNickName>
                        <CommentDate>({item?.createdAt})</CommentDate>
                      </CommentDivTop>

                      <Comment>{item?.comment}</Comment>
                    </CommentDiv>
                  );
                },
              )}
            <CommentInputDiv>
              <CommentInput
                type="text"
                placeholder="명예훼손, 개인정보 유출, 분쟁 유발, 허위사실 유포 등의 글은 이용약관에 의해 제재는 물론 법률에 의해 처벌 받을 수 있습니다. 건전한 커뮤니티를 위해 자제를 당부 드립니다."
              />
              <CommentBtn>등록</CommentBtn>
            </CommentInputDiv>
          </BoardDetailCommentBox>
          <NavigateDiv>
            <NavigateFirst>
              <DetailBtn
                onClick={() => {
                  navigate(`/board`);
                }}
              >
                목록
              </DetailBtn>
            </NavigateFirst>
            <NavigateLast>
              {loginUserPk === data.userPk && (
                <>
                  <DetailBtn onClick={() => {}}>수정</DetailBtn>
                  <DetailBtn
                    onClick={async () => {
                      const answer = confirm("정말로 삭제 하시겠습니까?");
                      if (answer) {
                        const result = await boardDeleteAPI(boardPk);

                        if (result === 1) {
                          navigate("/board");
                          alert("삭제 되었습니다.");
                        }
                      }
                    }}
                  >
                    삭제
                  </DetailBtn>
                </>
              )}
            </NavigateLast>
          </NavigateDiv>
        </BoardContent>
      )}
    </BoardWrap>
  );
};

export default BoardDetailPage;

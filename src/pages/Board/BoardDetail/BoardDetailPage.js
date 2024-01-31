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
import { boardDtailAPI } from "../../../api/board/boardApi";
import { useParams } from "react-router-dom";

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
      ? "590px"
      : props.idx === 3
      ? "180px"
      : "120px"};
  text-align: ${props =>
    props.idx === 2 ? "left" : props.idx === 3 ? "left" : "center"};

  color: #969696;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 32px;
`;

const BoardDetailContent = styled.div`
  width: 100%;
  min-height: 300px;
  margin-bottom: 18px;

  display: flex;
  align-items: center;

  border-bottom: 0.5px solid #654222;
  background-color: #fff;
`;

const BoardDetailImg = styled.img`
  width: 200px;
  height: 200px;
`;

const BoardDetailCommentBox = styled.div`
  background-color: #fffaf0;
  width: 100%;
  min-height: 150px;
  margin-bottom: 17px;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 1000px;
  height: 70px;

  color: #969696;
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

const BoardDetailPage = () => {
  const topItem = ["번호", "카테고리", "제목", "작성자", "날짜", "조회수"];
  const { boardPk } = useParams();
  const [filter, setFilter] = useState(0);
  const page = 1;
  const { data, isSuccess } = useQuery(
    ["boardDetail", boardPk, page],
    () => {
      const fetchData = async () => {
        try {
          const result = await boardDtailAPI(boardPk, page);
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
  return (
    <BoardWrap>
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
                {item}
              </DetailTopItem>
            );
          })}
        </BoardDetailTop>
        <BoardDetailContent>
          {data?.pics[0] && (
            <BoardDetailImg
              src={`${process.env.REACT_APP_BOARD_IMAGE_URL}/${boardPk}/${data?.pics[0]}`}
              alt=""
            />
          )}
        </BoardDetailContent>
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
          {["뽀기"].map((data, idx) => {
            return (
              <CommentDiv key={idx}>
                <CommentDivTop>
                  <CommentNickName>{data}</CommentNickName>
                  <CommentDate>(2023.01.13)</CommentDate>
                </CommentDivTop>

                <Comment>뒷통수 맛집</Comment>
              </CommentDiv>
            );
          })}
          <CommentInputDiv>
            <CommentInput
              type="text"
              placeholder="명예훼손, 개인정보 유출, 분쟁 유발, 허위사실 유포 등의 글은 이용약관에 의해 제재는 물론 법률에 의해 처벌 받을 수 있습니다. 건전한 커뮤니티를 위해 자제를 당부 드립니다."
            />
            <CommentBtn>등록</CommentBtn>
          </CommentInputDiv>
        </BoardDetailCommentBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardDetailPage;

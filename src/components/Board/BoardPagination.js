import styled from "@emotion/styled";
import React, { useState } from "react";

const PaginationDiv = styled.div`
  width: 600px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 11px;
  margin-top: 25px;
  margin-bottom: 20px;
`;

const Pagination = styled.div`
  color: ${props => (props.nowPage === props.pageNum ? "#654222" : "#969696")};
  cursor: pointer;
`;

const PageNextBtn = styled.img`
  cursor: pointer;
`;

const PagePrevBtn = styled(PageNextBtn)`
  transform: rotate(180deg);
`;

const BoardPagination = ({ totalPage, nowPage, setNowPage }) => {
  const MAX_PAGE = 10;
  const HALF_MAX_PAGE = Math.floor(MAX_PAGE / 2);

  let startPage, endPage;
  if (totalPage <= MAX_PAGE) {
    startPage = 1;
    endPage = totalPage;
  } else {
    if (nowPage <= HALF_MAX_PAGE) {
      startPage = 1;
      endPage = MAX_PAGE;
    } else if (nowPage + HALF_MAX_PAGE >= totalPage) {
      startPage = totalPage - MAX_PAGE + 1;
      endPage = totalPage;
    } else {
      startPage = nowPage - HALF_MAX_PAGE;
      endPage = nowPage + HALF_MAX_PAGE;
    }
  }

  const paginationItems = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx,
  );

  return (
    <PaginationDiv>
      {nowPage !== 1 && (
        <>
          <PagePrevBtn
            onClick={() => {
              setNowPage(1);
            }}
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn2.svg`}
            alt=""
          />
          <PagePrevBtn
            onClick={() => {
              setNowPage(nowPage !== 1 && nowPage - 1);
            }}
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn1.svg`}
            alt=""
          />
        </>
      )}

      {paginationItems.map((pageNum, idx) => {
        return (
          <Pagination
            key={idx}
            pageNum={pageNum}
            nowPage={nowPage}
            onClick={() => {
              setNowPage(pageNum);
            }}
          >
            {pageNum}
          </Pagination>
        );
      })}
      {totalPage !== nowPage && (
        <>
          <PageNextBtn
            onClick={() => {
              setNowPage(totalPage >= nowPage + 1 && nowPage + 1);
            }}
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn1.svg`}
            alt=""
          />
          <PageNextBtn
            onClick={() => {
              setNowPage(totalPage);
            }}
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn2.svg`}
            alt=""
          />
        </>
      )}
    </PaginationDiv>
  );
};

export default BoardPagination;

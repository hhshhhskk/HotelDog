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

const PageNextBtn = styled.img``;

const PagePrevBtn = styled(PageNextBtn)`
  transform: rotate(180deg);
`;

const BoardPagination = ({ page }) => {
  const [nowPage, setNowPage] = useState(1);

  return (
    <PaginationDiv>
      {page[0] !== 1 && (
        <>
          <PagePrevBtn
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn2.svg`}
            alt=""
          />
          <PagePrevBtn
            src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn1.svg`}
            alt=""
          />
        </>
      )}

      {page.map((pageNum, idx) => {
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
      <PageNextBtn
        src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn1.svg`}
        alt=""
      />
      <PageNextBtn
        src={`${process.env.PUBLIC_URL}/images/board/pageNextBtn2.svg`}
        alt=""
      />
    </PaginationDiv>
  );
};

export default BoardPagination;

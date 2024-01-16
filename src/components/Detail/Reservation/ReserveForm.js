import React from "react";
import { Wrapper } from "../../../styles/Common/layoutStyle";

const ReserveForm = () => {
  return (
    <Wrapper>
      <div>
        
        <div className="calendar">
            <div className="">
              <img src={`${process.env.PUBLIC_URL}/images/calendarImage.svg`} alt="" />
            </div>
            <div>체크 인/아웃 날짜 선택</div>

            <div className="calendar_select">
                <div>
                    <div>체크인</div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
        
        <div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/pawImage.svg`} alt="" />
            </div>
              <div>선택된 객실 정보</div>

              <div>객실 예약 클릭 시, 해당 호실이 입력되는 곳.</div>
        </div>
        
        <div>
          <form>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/pawImage.svg`} alt="" />
              <div>반려견 정보</div>
              <button>
                <img src={`${process.env.PUBLIC_URL}/images/bt_plus.svg`} alt="" />
              </button>
            </div>

            <div>
                <div>
                    <span>강아지 이름</span>
                    <input type="text" placeholder="얏호"></input>
                </div>
                <div>
                    <span>강아지 나이</span>
                    <input type="number" placeholder="얏호"></input>
                </div>
                <div>
                    <span>강아지 사이즈</span>
                    <input type="text" placeholder="얏호"></input>
                </div>
            </div>

            <textarea>특이사항 및 요청 사항을 입력해 주세요.</textarea>
          </form>
        </div>

        <div>
          <button>예약하기</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReserveForm;

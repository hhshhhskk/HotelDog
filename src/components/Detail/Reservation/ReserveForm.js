import React from "react";
// import { Wrapper } from "../../../styles/Common/layoutStyle";
import "../../../styles/Detail/reserveformstyle.css";

const ReserveForm = () => {
  return (
    <div className="reserveform">
      <div>
        {/* 체크 인/아웃 날짜 선택 */}
        <div className="calendar">
          <img
            className="calendar-img"
            src={`${process.env.PUBLIC_URL}/images/calendarImage.svg`}
            alt=""
          />
          <div className="calendar-date-title">체크 인/아웃 날짜 선택</div>

          <div className="calendar_select">
            <div>
              <div>체크인</div>
              <div>23.01.01(월)</div>
            </div>
            <div></div>
          </div>
        </div>

        {/* 선택된 객실 정보 영역 */}
        <div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/pawImage.svg`} alt="" />
          </div>
          <div>선택된 객실 정보</div>

          <div>객실 예약 클릭 시, 해당 호실이 입력되는 곳.</div>
        </div>

        {/* 반려견 정보 */}
        <div>
          <form>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/pawImage.svg`}
                alt=""
              />
              <div>반려견 정보</div>
              <button>
                <img
                  src={`${process.env.PUBLIC_URL}/images/bt_plus.svg`}
                  alt=""
                />
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

      {/* 선택된 예약 목록 나타내는 영역 */}
      <div className="reseved-wrap">
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
          <div>예약 중인 객실</div>
        </div>

        <div></div>
        {/* 총 금액 나타나는 영역 */}
        <div>
          <div>총 금액</div>
          <div>220,000원</div>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;

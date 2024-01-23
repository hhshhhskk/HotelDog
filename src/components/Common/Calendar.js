import ko from "date-fns/locale/ko";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../../styles/Common/calendar.css";

import { useState } from "react";
import { isWeekend } from "date-fns";
const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

    return (
      <div className="calendar_modal_wrap">
        <div className="calendar_modal_css">
          <div className="calendar_header">
            <div className="calendar_header-img">
              <img
                className="calendar_header-img"
                src={`${process.env.PUBLIC_URL}/images/calenderImage.svg`}
                alt=""
              />
            </div>

            <div className="calendar_header-text">체크 인/아웃 날짜 선택</div>
          </div>

          {/* 달력만 감싸기 */}
          <div className="calendar_wrap">
            <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              months={2}
              direction="horizontal"
              locale={ko}
              // ranges prop을 통해 startDate와 endDate의 스타일 지정
              rangeColors={["#000"]} // 원하는 색상으로 변경
            />
          </div>

          <button className="calendar_button">선택</button>
        </div>
      </div>
    );
  };
  
export default Calendar;

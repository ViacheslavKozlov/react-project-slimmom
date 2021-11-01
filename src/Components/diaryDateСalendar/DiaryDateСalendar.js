import React, { useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";
import { useDispatch } from "react-redux";
import { changeDateOperation } from "../../redux/DiaryProducts/diaryProductOperations";

// import DatePicker from "react-date-picker/dist/entry.nostyle";

export default function DiaryDateСalendar({ date, setDate }) {
  // const [value, updateValue] = useState(new Date());
  const dispatch = useDispatch();
  const todayDate = moment(new Date()).format("YYYY-MM-DD");
  const onChange = (date) => {
    setDate(date);
    const currentDate = moment(date).format("YYYY-MM-DD");
    if (currentDate > todayDate) {
      alert(
        `Машина времени еще в разработке. А сегодня ${moment(todayDate).format(
          "DD.MM.YYYY"
        )}`
      );
      return;
    }
    console.log(date);
    console.log(currentDate);

    dispatch(changeDateOperation(currentDate));
    // updateValue(date);
  };

  return (
    <div>
      <DatePicker onChange={onChange} value={date} />
    </div>
  );
}

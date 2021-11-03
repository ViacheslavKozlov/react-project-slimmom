import React, { useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { changeDateOperation } from "../../redux/DiaryProducts/diaryProductOperations";
import { getDailyRateByDateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { userData } from "../../redux/user/userSelectors";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";

// import DatePicker from "react-date-picker/dist/entry.nostyle";

export default function DiaryDateСalendar({ date, setDate }) {
  // const [value, updateValue] = useState(new Date());
  const dispatch = useDispatch();
  const todayDate = moment(new Date()).format("YYYY-MM-DD");
  const currentDate = moment(date).format("YYYY-MM-DD");
  const userDataSelector = useSelector(userData);
  const dailyRate = useSelector(dailyRateSelector);

  useEffect(
    () => {
      // console.log(currentDate);
      dispatch(changeDateOperation(currentDate));
      if (dailyRate.dailyRate === null) {
        return;
      }
      if (currentDate < todayDate) {
        // alert("В этот день Вы не вели дневник");
        //срабатывает только на изменение даты
        !!dailyRate.dailyRate && dispatch(getDailyRateByDateOperation({ date: currentDate }));

        return;
      }

      dispatch(getDailyRateByDateOperation({ date: todayDate }));
    },
    [dispatch, currentDate, todayDate, userDataSelector.age, dailyRate.dailyRate]
  );

  const onChange = date => {
    // const currentDate = moment(date).format("YYYY-MM-DD");
    if (moment(date).format("YYYY-MM-DD") > todayDate) {
      alert(`Машина времени еще в разработке. А сегодня ${moment(todayDate).format("DD.MM.YYYY")}`);
      return;
    }
    setDate(date);
    // dispatch(changeDateOperation(currentDate));
    // updateValue(date);
  };

  return <DatePicker onChange={onChange} value={date} />;
}

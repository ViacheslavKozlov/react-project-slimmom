import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function DiaryDateСalendar({ date, setDate }) {
  // const [value, updateValue] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    // updateValue(date);
  };

  return (
    <div>
      <DatePicker onChange={onChange} value={date} />
    </div>
  );
}

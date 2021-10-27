import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function DiaryDateСalendar() {
  const [value, updateValue] = useState(new Date());

  const onChange = (date) => {
    updateValue(date);
  };

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

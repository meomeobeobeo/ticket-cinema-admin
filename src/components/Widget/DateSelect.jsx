import { DatePicker } from "antd";
import React from "react";

const DateSelect = ({value , onChange}) => {
console.log(value)



  return (
    <DatePicker
      onChange={(date, dateString) => {
        onChange(dateString)
      }}
    />
  );
};

export default DateSelect;

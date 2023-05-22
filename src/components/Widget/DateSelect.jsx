import { DatePicker } from "antd";
import React from "react";

const DateSelect = (props) => {
  const {onChange} = props



  return (
    <DatePicker
      onChange={(date, dateString) => {
        onChange(dateString)
      }}
    />
  );
};

export default DateSelect;

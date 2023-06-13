import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const customFormat = (value) => `${value.format(dateFormat)}`;

const DateSelect = ({ value, onChange }) => {
  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
   
      setDefaultValue();
   
    
  }, []);

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.format(dateFormat);
      onChange(formattedDate);
    } else {
      onChange(null);
    }
  };

  return (
    <DatePicker
      onChange={handleDateChange}
      defaultValue={value ? dayjs(value, dateFormat) : dayjs()  }
      format={customFormat}
    />
  );
};

export default DateSelect;

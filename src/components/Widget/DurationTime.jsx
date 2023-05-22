import { Input } from "antd";
import React, { useEffect, useState } from "react";

const DurationTime = (props) => {
  const { value, onChange } = props;
  const [duration, setDuration] = useState(value || {
    hours : '',
    minutes : ''
  });
  useEffect(() => {
    onChange(duration);
    
  }, [duration]);
  return (
    <div className="flex w-full flex-row gap-8">
      <div className="flex flex-row justify-center items-center gap-2">
        <Input
          value={duration.hours}
          className="w-14"
          onChange={(e) => {
            setDuration({
              ...duration,
              hours: e.target.value,
            });
          }}
        />
        <span className="font-semibold">Giờ</span>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <Input
          value={duration.minutes}
          className="w-14"
          onChange={(e) => {
            setDuration({
              ...duration,
              minutes: e.target.value,
            });
          }}
        />
        <span className="font-semibold">Phút</span>
      </div>
    </div>
  );
};

export default DurationTime;

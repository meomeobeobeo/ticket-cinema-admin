import React from "react";
import TextArea from "antd/es/input/TextArea";


const TextAreaWidget = ({value , onChange}) => {
  return (
    <TextArea
    value={value}
    onChange={onChange}
      // value={description}
      // onChange={(e) => {
      //   setDescription(e.target.value);
      // }}
    />
  );
};

export default TextAreaWidget;

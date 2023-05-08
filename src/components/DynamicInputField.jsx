import { Button, Input, Space } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const DynamicInputField = () => {
  const [inputList, setInputList] = useState([""]);

  const handleAddField = () => {
    setInputList([...inputList, ""]);
  };

  const handleInputChange = (index, e) => {
    const list = [...inputList];
    list[index] = e.target.value;
    setInputList(list);
  };

  const handleRemoveField = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  return (
    <div>
      <Space.Compact className="flex flex-col justify-center items-center ">
        {inputList.map((value, index) => (
          <Input
            key={index}
            placeholder="Enter a value"
            value={value}
            onChange={(e) => handleInputChange(index, e)}
            style={{ marginBottom: 10 }}
            addonAfter={
              <Button
                className="ml-2"
                type="link"
                onClick={() => handleRemoveField(index)}
                disabled={inputList.length === 1}
              >
                Remove
              </Button>
            }
          />
        ))}
      </Space.Compact>
      <Button
        type="dashed"
        onClick={handleAddField}
        className="flex flex-row justify-center items-center gap-2"
        style={{ marginTop: 10 }}
      >
        <AiOutlinePlus />
        <span>Add field</span>
      </Button>
    </div>
  );
};

export default DynamicInputField;

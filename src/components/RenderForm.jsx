import React, { useEffect, useState } from "react";
import { Col, Input, Row, Select, Typography } from "antd";
import Divider from "./Divider";
import * as Widget from "../components/Widget";
import * as api from "../api/request";
import { toast } from "react-toastify";

const RenderForm = ({ formFormat, defaultData, mode , updateInfor }) => {


  
  const [formData, setFormData] = useState({});


 
  
  useEffect(()=>{
   if(defaultData){
    setFormData(defaultData)
   }
   else{
    setFormData({})
   }

  },[defaultData])
  

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };
  const handleCreateFilmInfor = async () => {
    try {
      toast.promise(api[formFormat.api.create]({ formData: formData }), {
        pending: "Pendding",
        success: "Create success 👌",
        error: "Have some error 🤯",
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  if (!formFormat.schema) {
    return <Typography className="text-red-400">Form is empty.</Typography>;
  }

  return (
    <div className="w-full">
      <Row gutter={[32, 32]}>
        {formFormat.schema.map((form, index) => {
          if (form.type === "input") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Input
                  value={formData[form.field] || ""}
                  onChange={(e) =>
                    handleInputChange(form.field, e.target.value)
                  }
                />
                <Divider />
              </Col>
            );
          } else if (form.type === "select") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Select
                  value={formData[form.field] || ""}
                  onChange={(value) => handleInputChange(form.field, value)}
                  options={form.defaultOptions}
                />
                <Divider />
              </Col>
            );
          } else if (form.type === "selectSearch") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.SelectSearch
                  value={formData[form.field] || ""}
                  onChange={(value) => handleInputChange(form.field, value.value)}
                  apiNameSetData={form.apiNameSetData}
                />
                <Divider />
              </Col>
            );
          } else if (form.widget === "UploadImage") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.UploadImage
                  imgLink={formData[form.field] || ""}
                  count={1}
                  setImgLink={(imgLink) => {
                    handleInputChange(form.field, imgLink);
                  }}
                />
                <Divider />
              </Col>
            );
          } else if (form.widget === "DynamicInputField") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.DynamicInputField
                  value={formData[form.field] || []}
                  onChange={(value) => {
                    handleInputChange(form.field, value);
                  }}
                />
                <Divider />
              </Col>
            );
          } else if (form.widget === "DateSelect") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.DateSelect
                  value={formData[form.field || ""]}
                  onChange={(value) => {
                    handleInputChange(form.field, value);
                  }}
                />
                <Divider />
              </Col>
            );
          } else if (form.widget === "TextArea") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.TextArea
                  value={formData[form.field] || ""}
                  onChange={(e) =>
                    handleInputChange(form.field, e.target.value)
                  }
                />
                <Divider />
              </Col>
            );
          } else if (form.widget === "DurationTime") {
            return (
              <Col key={index} className="flex flex-col gap-2 " span={12}>
                <Typography className="font-semibold">{form.label}</Typography>
                <Widget.DurationTime
                  value={formData[form.field] || ""}
                  onChange={(value) => {
                    handleInputChange(form.field, value);
                  }}
                />
                <Divider />
              </Col>
            );
          } else {
            return <div>DO NOT HAVE WIDGET</div>;
          }
          // ... handle other form types and widgets similarly
        })}
      </Row>
      <div className="w-full h-[2px] bg-[#CCC] my-6" />
      {mode === "create" && (
        <div className="flex flex-row justify-between items-center mt-6">
          <div
            onClick={() => {
              handleCreateFilmInfor();
            }}
            className="bg-blue-400 py-3 px-4 text-center flex justify-center items-center font-semibold text-slate-100 hover:text-slate-100 hover:bg-blue-500 rounded-xl cursor-pointer"
          >
            Create data
          </div>
        </div>
      )}
      {mode === "update" && (
        <div className="flex flex-row justify-between items-center mt-6">
          <div
            onClick={() => {
              if(updateInfor){
                updateInfor({filmId : formData.id , formData : formData})
              }
              else{
                console.error("Not have fuction matching")
              }

            }}
            className="bg-blue-400 py-3 px-4 text-center flex justify-center items-center font-semibold text-slate-100 hover:text-slate-100 hover:bg-blue-500 rounded-xl cursor-pointer"
          >
            Update film information.
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderForm;

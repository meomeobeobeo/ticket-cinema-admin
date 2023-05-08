import { Button, DatePicker, Input, Select } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";
import axios from "axios";
import DynamicInputField from "../components/DynamicInputField";
import TextArea from "antd/es/input/TextArea";
import Divider from "../components/Divider";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const FilmInformation = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="w-full gap-10 flex flex-row flex-wrap">
      <div className="flex flex-col gap-4 w-[40%]">
        {/* name */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Name</span>
          <Input />
        </div>
        <Divider />
        {/* upload image banner */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">imgBanner</span>
          <Upload
            customRequest={async (options) => {
              const formData = new FormData();
              formData.append("file", options.file);

              try {
                const response = await axios.post(
                  "http://localhost:1337/UploadImage",
                  formData
                );
                console.log(response);
                options.onSuccess(response.data, options.file);
              } catch (error) {
                options.onError(error);
              }
            }}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
        </div>
        <Divider />
        {/* Thời lượng phim */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Duration</span>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row justify-center items-center gap-2">
              <Input className="w-14" />
              <spa className="font-semibold">Giờ</spa>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Input className="w-14" />
              <span className="font-semibold">Phút</span>
            </div>
          </div>
        </div>

        <Divider />

        {/* author */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Author</span>
          <Input />
        </div>
        <Divider />

        {/* actors */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Actors</span>

          <DynamicInputField />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[40%]">
        {/* start time */}

        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Start time</span>

          <DatePicker
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
        {/* language */}
        <Divider />

        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Language</span>

          <Select
            options={[
              {
                value: "english",
                label: "English",
              },
              {
                value: "vietnamese",
                label: "Vietnamese",
              },
            ]}
          />
        </div>
        {/* rated */}
        <Divider />

        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Rated</span>
          <Input />
        </div>
        <Divider />

        {/* description */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Description</span>
          <TextArea />
        </div>

        <Divider />
        <div className="flex flex-row justify-between items-center">
          <div className="bg-blue-400 py-3 px-4 text-center flex justify-center items-center font-semibold text-slate-100 hover:text-slate-100 hover:bg-blue-500 rounded-xl cursor-pointer"  >
            Save film information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInformation;

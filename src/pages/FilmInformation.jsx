import { Button, DatePicker, Input, Select } from "antd";
import React from "react";

import { Modal, Upload } from "antd";
import { useState } from "react";
import axios from "axios";
import DynamicInputField from "../components/DynamicInputField";
import TextArea from "antd/es/input/TextArea";
import Divider from "../components/Divider";
import UploadImage from "../components/UploadImage";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const FilmInformation = () => {
  const [name, setName] = useState("");
  const [imgBanner, setImgbanner] = useState("");
  const [duration, setDuration] = useState({
    hours: "",
    minutes: "",
  });
  const [author, setAuthor] = useState("");
  const [actors, setActors] = useState([""]);
  const [startTime, setStartTime] = useState("");
  const [language, setLanguage] = useState("vietnamese");
  const [rated, setRated] = useState("");
  const [description, setDescription] = useState("");

  const formData = {
    name: name,
    duration: duration,
    author: author,
    imgBanner: imgBanner,
    actors: actors,
    startTime: startTime,
    language: language,
    rated: rated,
    description: description,
  };

  console.log(formData);

  return (
    <div className="w-full gap-10 flex flex-row flex-wrap">
      <div className="flex flex-col gap-4 w-[40%]">
        {/* name */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Name</span>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <Divider />
        {/* upload image banner */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">imgBanner</span>
          <UploadImage
            imgLink={imgBanner}
            setImgLink={setImgbanner}
            count={1}
          />
        </div>
        <Divider />
        {/* Thời lượng phim */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Duration</span>
          <div className="flex flex-row gap-8">
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
              <spa className="font-semibold">Giờ</spa>
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
        </div>

        <Divider />

        {/* author */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Author</span>
          <Input
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <Divider />

        {/* actors */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Actors</span>

          <DynamicInputField inputList={actors} setInputList={setActors} />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[40%]">
        {/* start time */}

        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Start time</span>

          <DatePicker
            onChange={(date, dateString) => {
              setStartTime(dateString);
            }}
          />
        </div>
        {/* language */}
        <Divider />

        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Language</span>

          <Select
            value={language}
            onChange={(e) => {
              setLanguage(e);
            }}
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
          <Input
            value={rated}
            onChange={(e) => {
              setRated(e.target.value);
            }}
          />
        </div>
        <Divider />

        {/* description */}
        <div className="flex flex-col w-full gap-2">
          <span className="font-semibold">Description</span>
          <TextArea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <Divider />
        <div className="flex flex-row justify-between items-center">
          <div className="bg-blue-400 py-3 px-4 text-center flex justify-center items-center font-semibold text-slate-100 hover:text-slate-100 hover:bg-blue-500 rounded-xl cursor-pointer">
            Save film information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInformation;

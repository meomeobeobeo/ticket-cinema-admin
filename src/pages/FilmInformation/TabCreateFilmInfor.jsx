import React from "react";
import { Button, DatePicker, Input, Select } from "antd";

import { Modal, Upload } from "antd";
import { useState } from "react";
import axios from "axios";
import DynamicInputField from "../../components/Widget/DynamicInputField";
import TextArea from "antd/es/input/TextArea";
import Divider from "../../components/Divider";
import UploadImage from "../../components/Widget/UploadImage";
import { createFilmInformation } from "../../api/request";
import { toast } from "react-toastify";
import RenderForm from "../../components/RenderForm";
import FORMS from '../../config/form.json'
const TabCreateFilmInfor = () => {
  return <RenderForm mode={'create'} formFormat={FORMS.filmInformations} />
};

export default TabCreateFilmInfor;

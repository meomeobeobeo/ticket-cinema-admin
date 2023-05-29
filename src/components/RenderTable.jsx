import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Typography } from "antd";
import moment from "moment";
import { RxUpdate } from "react-icons/rx";
import { BsTrash } from "react-icons/bs";
import * as api from "../api/request";
import FORMS from "../config/form.json";
import DynamicModal from "./DynamicModal";
const RenderTable = ({ tableFormat }) => {
  // table format is fomat to render tablen
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const formFormat = FORMS[`${tableFormat?.formFormatName}`];

  useEffect(() => {
    let res = api[tableFormat?.apiName?.getAll]();
    res.then((data) => {
      let dataRes = data.data || [];

      const mappedData = dataRes.map((item) => {
        const mappedItem = { key: item?.id , id : item.id };
        tableFormat.columns.forEach((colFomat) => {
          const { label, field, type } = colFomat;

          if (field in item) {
            mappedItem[field] = item[field];
          }
        });
        return mappedItem;
      });

      setData(mappedData);
    });
  }, []);

  const columns = tableFormat?.columns?.map((value, index) => {
    if (value.type === "time") {
      return {
        title: value?.label,
        dataIndex: value?.field,
        key: index,
        render: (text) => (
          <Tag color="success">{`${text?.hours} giờ  ${text?.minutes} phút`}</Tag>
        ),
      };
    } else if (value.type === "dateTime") {
      return {
        title: value?.label,
        dataIndex: value?.field,
        key: index,
        render: (text) => (
          <Tag color="geekblue">
            {moment(text).format("MMMM Do YYYY, h:mm:ss a")}
          </Tag>
        ),
      };
    }
    return {
      title: value?.label,
      dataIndex: value?.field,
      key: index,
      render: (text) => <Typography>{text}</Typography>,
    };
  });
  columns.push({
    title: "Actions",
    key: "actions",
    render: (text, record, hello) => {
      return (
        <div className="flex flex-row gap-2">
          <div
            onClick={() => {
              setDataModal(text);

              setIsModalOpen(true);
              // show modal update
            }}
            className="p-1 rounded-full hover:bg-slate-800 hover:text-[#fff] cursor-pointer"
          >
            <RxUpdate />
          </div>
          <div
            onClick={() => {
              // show modal confirm delete
            }}
            className="p-1 rounded-full hover:bg-slate-800 hover:text-[#fff] cursor-pointer"
          >
            <BsTrash />
          </div>
        </div>
      );
    },
  });

  return (
    <div className="w-full">
      <Table columns={columns} dataSource={data} />
      <DynamicModal
        dataShow={dataModal}
        formFomat={formFormat}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default RenderTable;

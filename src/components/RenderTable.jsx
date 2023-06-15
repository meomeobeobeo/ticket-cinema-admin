import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Typography } from "antd";
import moment from "moment";
import { RxUpdate } from "react-icons/rx";
import { BsTrash } from "react-icons/bs";
import * as api from "../api/request";
import FORMS from "../config/form.json";
import DynamicModal from "./DynamicModal";
import { toast } from "react-toastify";
const RenderTable = ({ tableFormat }) => {
  // table format is fomat to render tablen
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const formFormat = FORMS[`${tableFormat?.formFormatName}`];

  useEffect(() => {
    fetchData();
    setDataModal({})
  }, []);

  const fetchData = async () => {
    let res = await api[tableFormat?.apiName?.getAll]();
    let dataRes = res.data || [];
    const mappedData = dataRes.map((item) => {
      const mappedItem = { key: item?.id, id: item.id };
      tableFormat.columns.forEach((colFomat) => {
        const { label, field, type } = colFomat;

        if (field in item) {
          mappedItem[field] = item[field];
        }
      });
      return mappedItem;
    });

    setData(mappedData);
  };

  const deleteInfor = async ({ filmId }) => {
    try {
      await api[tableFormat?.apiName?.delete]({ id: filmId });
      toast.success("Delete success 👌");
      fetchData();
    } catch (error) {
      toast.error("Have some error when delete 🤯");
    }
  };
  const updateInfor = async ({ filmId , formData }) => {
    try {
      await api[tableFormat?.apiName?.update]({ id: filmId , formData :formData  });
      toast.success("update success 👌");
      fetchData();
    } catch (error) {
      toast.error("Have some error when update data 🤯");
    }
  };

  const columns = tableFormat?.columns?.map((value, index) => {
    if (value.type === "time") {
      return {
        title: value?.label,
        dataIndex: value?.field,
        key: index,
        render: (text) => (
          <Tag  color="success">{`${text?.hours} giờ  ${text?.minutes} phút`}</Tag>
        ),
      };
    } else if (value.type === "dateTime") {
      return {
        title: value?.label,
        dataIndex: value?.field,
        key: index,
        render: (text) => {
        
          const dateStr = text;
          const formattedDate = moment(dateStr, "YYYY/MM/DD").format(
            "MMMM Do YYYY"
          );
        
          return (
            <Tag color="geekblue">
            {formattedDate}
          </Tag>
          )
        },
      };
    } else if (value.type === "array") {
      return {
        title: value?.label,
        dataIndex: value?.field,
        key: index,
        render: (text) => {
          let components = text.map((value , index) => {
            return <Tag key={index} color="cyan-inverse">{value}</Tag>;
          });

          return <div className="flex flex-col gap-1">{components}</div>;
        },
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
    render: (text) => {
      const handleModalOpen = () => {
        // console.log(text)
        setDataModal(text);
        setIsModalOpen(true);
      };

      const handleDeleteFilm = () => {


        
        deleteInfor({ filmId: text.id });
      };

      return (
        <div className="flex flex-row gap-2">
          <div
            onClick={handleModalOpen}
            className="p-1 rounded-full hover:bg-slate-800 hover:text-[#fff] cursor-pointer"
          >
            <RxUpdate />
          </div>
          <div
            onClick={handleDeleteFilm}
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
        updateInfor = {updateInfor}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default RenderTable;

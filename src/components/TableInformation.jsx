import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import TABLE from "../config/table.json";
import * as api from "../api/request"
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableInformation = () => {
  let table = TABLE["test"]



  useEffect(()=>{
    let res = api[table.apiName.getAll]()
    res.then((data)=>{
        console.log(data?.data)
    })
  },[])









  let dataTest = TABLE["test"].column.map((val) => {
    if (val.field === "tags") {
      return {
        title: val.name,
        key: val.field,
        dataIndex: val.field,
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      };
    }

    return {
      title: val.name,
      dataIndex: val.field,
      key: val.field,
      render: (text) => <a>{text}</a>,
    };
  });





  return (
    <div className="w-full">
      <Table columns={dataTest} dataSource={data} />
    </div>
  );
};

export default TableInformation;

import React, { useState } from "react";

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import {IoFastFood} from 'react-icons/io5'
import {BsFillTicketPerforatedFill } from 'react-icons/bs'
import {FaMoneyBill} from 'react-icons/fa'
import {FcFeedback} from 'react-icons/fc'
import {MdDashboard,MdManageHistory} from 'react-icons/md'
import {GrUserManager} from 'react-icons/gr'
import {BiFilm} from 'react-icons/bi'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const itemNavs = [
  getItem('Dashboard', "/dashboard" , <MdDashboard/>),
  getItem('Films','sub1',<DesktopOutlined/>,[
    getItem('Film information','/filmInfor',<BiFilm/>),
    getItem('Film manager','/filmManager',<MdManageHistory  />),
  ]),
  getItem('Food','/food',<IoFastFood/>),
  getItem('Tickets manager','/tickets',<BsFillTicketPerforatedFill/>),
  getItem('Bill manager','/bills' , <FaMoneyBill/>),
  getItem('FeedBack manager','/feedback', <FcFeedback/>)
]


const TheSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const onClickMenu = (e)=>{
      navigate(e.key)
    }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
       className="w-full flex justify-center items-center h-32 font-semibold text-lg text-slate-100"
      >
        M-ADMIN
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={itemNavs}
        onClick={onClickMenu}
      />
    </Sider>
  );
};

export default TheSider;

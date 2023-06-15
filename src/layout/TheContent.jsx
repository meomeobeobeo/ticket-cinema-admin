import React, { useState } from "react";

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Route, Routes } from "react-router-dom";
import FilmInformation from "../pages/FilmInformation/FilmInformation";
import FilmManager from "../pages/FilmManager/FilmManager";
import Tickets from "../pages/Tickets";
import Bill from "../pages/Bill";
import FeedBack from "../pages/FeedBack";
import DashBoard from "../pages/DashBoard";
import Food from "../pages/Food";
const { Header, Content, Footer, Sider } = Layout;
import { useLocation } from 'react-router-dom';


const TheContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const currentPath = location.pathname.substring(1);
  


  return (
    <Layout className="site-layout">
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>{currentPath}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/filmInfor" element={<FilmInformation />} />
            <Route path="/filmManager" element={<FilmManager />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/bills" element={<Bill />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/food" element={<Food />} />






          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ticket cinema admin @2023
      </Footer>
    </Layout>
  );
};

export default TheContent;

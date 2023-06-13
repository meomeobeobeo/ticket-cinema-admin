import TabPane from "antd/es/tabs/TabPane";
import TabCreateFilmInfor from "./TabCreateFilmInfor";
import { useEffect, useState } from "react";
import { Tabs } from "antd";

import RenderTable from "../../components/RenderTable";
import TABLES from "../../config/table.json"

const FilmInformation = () => {
  const [activeTab, setActiveTab] = useState("create-infor");
  
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="w-full">
      <Tabs className="w-full" activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Create film information" key="create-infor">
          <TabCreateFilmInfor/>
        </TabPane>
        <TabPane tab="Table film information" key="table-infor">
          <RenderTable  tableFormat={TABLES.filmInformation} />
        </TabPane>
        
      </Tabs>
    </div>
  );
};

export default FilmInformation;

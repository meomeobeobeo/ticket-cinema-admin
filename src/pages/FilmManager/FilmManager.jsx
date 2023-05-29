import React, { useState } from 'react'
import RenderForm from '../../components/RenderForm'
import FORMS from '../../config/form.json'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
const FilmManager = () => {
  const [activeTab, setActiveTab] = useState("create-infor");
  
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="w-full">
    <Tabs className="w-full" activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Create film manager" key="create-infor">
      <RenderForm mode={'create'} formFormat={FORMS.filmManager} />
      </TabPane>
      <TabPane tab="Table film manager" key="table-infor">
        {/* <RenderTable  tableFormat={TABLES.test} /> */}
        
      </TabPane>
      
    </Tabs>
  </div>
  )
}

export default FilmManager
import React from "react";

const Couch = () => {
  const [activeTab, setActiveTab] = useState("create-infor");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="w-full">
      <Tabs className="w-full" activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Create seat information" key="create-infor">
          <RenderForm mode={"create"} formFormat={FORMS.foodInformations} />
        </TabPane>
        <TabPane tab="Table food list" key="table-infor">
          {/* <RenderTable  tableFormat={TABLES.test} /> */}
          <RenderTable tableFormat={TABLES.foodInformation} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Couch;

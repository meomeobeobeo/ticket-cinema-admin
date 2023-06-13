import { Button, Modal } from "antd";
import React from "react";
import RenderForm from "./RenderForm";

const DynamicModal = ({ dataShow,updateInfor, formFomat, isModalOpen, setIsModalOpen }) => {

 
  const handleUpdate = async ({filmId , formData}) => {
    // Handle update action
    // ...
   
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Modal
      mask={true}
      onCancel={handleCancel}
      okText="Update data"
      width={"80%"}
      maskClosable={true}
      okType="default"
      maskStyle={{
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
      title="Update data"
      open={isModalOpen}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="update"
          className="bg-blue-500 hidden"
          type="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>,
      ]}
      className="customModal" // Apply the custom style to adjust opacity
    >
      <RenderForm updateInfor = {updateInfor} mode={'update'} defaultData={dataShow} formFormat={formFomat} />
      {/* */}
    </Modal>
  );
};

export default DynamicModal;

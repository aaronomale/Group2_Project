import React, { useState } from "react";
import { Button, Modal, Input, message } from "antd";

const DeleteProductsModal = ({ visible, onCancel, onConfirm }) => {
  const [adminCode, setAdminCode] = useState("");

  const handleConfirm = () => {
    // Validate admin code before proceeding
    if (adminCode === "1234") {
      onConfirm();
      message.success("Deleted successfully");
      setAdminCode(""); // Clear admin code after confirmation
    } else {
      message.error("Invalid admin code. Please try again.");
    }
  };

  return (
    <Modal
      title="Confirmation"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="confirm" type="primary" onClick={handleConfirm}>
          Confirm
        </Button>,
      ]}
    >
      <p>Please enter admin code to proceed:</p>
      <Input
        type="password"
        value={adminCode}
        onChange={(e) => setAdminCode(e.target.value)}
        onPressEnter={handleConfirm} // Allow pressing Enter to confirm
      />
    </Modal>
  );
};

export default DeleteProductsModal;

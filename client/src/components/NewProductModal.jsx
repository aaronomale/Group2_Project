import React, { useState } from "react";
import {  Form, Input, Modal } from "antd";

const NewProductModal = ({ visible, setModalVisible, onCancel, notify, fetchData }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      form.resetFields();
      
  
      // Convert price to a number
      values.quantity = parseInt(values.quantity); // Convert quantity to a number
      values.listPrice = parseFloat(values.listPrice);
  
      console.log(values);
  
      // Perform POST request to create new product
      const response = await fetch("http://localhost:8080/addproducts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to create product");
      }
  
    //   const data = await response.json();
    //   console.log("Success:", data);
    setLoading(false);
    notify("success", "Product created");
    setModalVisible(false);
    fetchData();
      
    } catch (error) {
      console.error("Error:", error);
      notify("error", error.message);
      setLoading(false);
      console.log("Validation failed:", error);
      return; // Return if there's an error
    }
  };
  

  return (
    <Modal
      visible={visible}
      title="New Product"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleCreate}
    >
      <Form form={form} layout="vertical" loading={loading}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the product name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter the product description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter the product category" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please enter the product quantity" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="listPrice"
          label="Price"
          rules={[{ required: true, message: "Please enter the product price" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewProductModal;

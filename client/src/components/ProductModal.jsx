import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const ProductModal = ({ productId, visible, onCancel, onUpdate }) => {
  const [productData, setProductData] = useState({});
  const [quantityInput, setQuantityInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const product = await response.json();
        setProductData(product);
        setQuantityInput(String(product.quantity)); // Convert quantity to string for input
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (visible) {
      fetchProductData();
    }
  }, [productId, visible]);

  const handleUpdateProduct = async () => {
    setLoading(true);
    try {
      // Convert quantityInput to a number before sending to the server
      const updatedData = { ...productData, quantity: Number(quantityInput) };

      // Perform the PUT request to update the product
      const response = await fetch(`http://localhost:8080/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      onUpdate(); // Update the data in the parent component
      onCancel(); // Close the modal
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'quantity') {
      // Store quantityInput as text
      setQuantityInput(value);
    } else {
      setProductData({ ...productData, [fieldName]: value });
    }
  };

  return (
    <Modal
      title={`Update ${productData.name}`}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleUpdateProduct}>
          Update
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="ID">
          <Input value={productData.id} disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          rules={[{ required: true, message: 'Please enter product name' }]}
        >
          <Input value={productData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Description"
          rules={[{ required: true, message: 'Please enter product description' }]}
        >
          <Input.TextArea value={productData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[{ required: true, message: 'Please enter product category' }]}
        >
          <Input value={productData.category} onChange={(e) => handleInputChange('category', e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Quantity"
          rules={[{ required: true, message: 'Please enter product quantity' }]}
        >
          <Input type="text" value={quantityInput} onChange={(e) => handleInputChange('quantity', e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;

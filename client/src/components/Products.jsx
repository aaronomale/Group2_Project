import React, { useState, useRef } from "react";
import { Button, FloatButton, Switch, Table, Tag, Tooltip, Tour, message } from "antd";
import MyDropdown from "./MyDropdown";
import Search from "antd/es/input/Search";
import ProductModal from "./ProductModal";
import ProductsStatistic from "./ProductStats";

import toast, { Toaster } from 'react-hot-toast';
import DeleteProductsModal from "./DeleteProductModal";
import generatePDF from "../services/reportGenerator";
import { DownloadOutlined } from "@ant-design/icons";

// Table Component
const Products = ({data, setData, loading, categories, error, fetchData, newRef}) => {
 

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [resetLoading, setResetLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showLowStock, setShowLowStock] = useState(false);

  const [editProductId, setEditProductId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  // Tour state
  const [open, setOpen] = useState(false);

  // Tour steps
  const steps = [
    {
      title: 'Filter by category',
      description: 'Hover on this button to view category. And select category to filter.',
      target: () => ref1.current,
    },
    {
      title: 'Delete products',
      description: 'Delete selected products by selecting the items to delete and click delete button.',
      target: () => ref2.current,
    },
    {
      title: 'Download Report',
      description: 'Click this to download pdf report of the current table.',
      target: () => ref5.current,
    },
    {
      title: 'Toggle Low products',
      description: 'Toggle to view products to restock.',
      target: () => ref3.current,
    },
    {
      title: 'Add new Product',
      description: 'Click this button to Add new product to the inventory.',
      target: () => newRef.current,
    },
    {
      title: 'Search products',
      description: 'Search products by name, category, or description',
      target: () => ref4.current,
    },
  ];

  // Table Columns
  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    // },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "listPrice",
      render: price => `$${price}`,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <span className="link" onClick={() => handleEditProduct(record.id)}>
          Edit
        </span>
        
      ),
    },
    {
      title: "Status",
      dataIndex: "",
      render: (text, record) => {
        if (record.quantity < 10) {
          return <Tag color="volcano">Low</Tag>;
        }else if(record.quantity >= 10 && record.quantity <20){
          return <Tag color="warning">Restock</Tag>;
        }
        return <Tag color="success">Ok</Tag>;
      },
    },
  ];

  // Filtered array based on search, category, and status
  const filteredData = data.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) && // Filter by category
      (searchTerm === "" ||
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )) && // Filter by search term
      (showLowStock ? item.quantity < 10 : true) // Filter by low stock condition
  );

  // Notification
  const notify = (type,message) => {
    type === 'success' ? toast(message) : toast.error(message);
  };


  // Search input handler
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // Low stock handler
  const handleToggleLowStock = (checked) => {
    setShowLowStock(checked);
  };

  // TABLE METHODS
  // Delete rows
  const handleDelete = async () => {
    try {
      setResetLoading(true);
      const response = await fetch('http://localhost:8080/deleteproducts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedRowKeys)
      });
      if (!response.ok) {
        throw new Error('Failed to delete products');
      }
      // const data = await response.text();
      fetchData();
      // Clear the selected row keys after successful deletion
      setSelectedRowKeys([]);
      // Close the modal
      handleCancelDelete();
    } catch (error) {
      console.error('Error deleting products:', error);
      message.error('error', 'Failed to delete products');
    } finally {
      setResetLoading(false);
    }
  };

  // Open Delete Modal
  const handleDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  // Close delete modal
  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  // Called each time category is changed
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // Dropdown method to select category
  const handleSelectCategory = (selected) => {
    const category = categories[selected.key];
    setSelectedCategory(category);
  };

  // Modal methods
  const handleEditProduct = (productId) => {
    setEditProductId(productId);
    setIsModalVisible(true);
  };
  // Close modal
  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  //Download report
  const handleDownload = ()=>{
    if(!filteredData.length > 0){
      message.error("Nothing to download");
      return;
    }
    if(showLowStock){
      generatePDF(filteredData, "Low Stock")
      return;
    }
    generatePDF(filteredData, selectedCategory);
  }

  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ProductModal
        productId={editProductId}
        visible={isModalVisible}
        onCancel={handleCancelModal}
        onUpdate={fetchData}
        notify={notify}
      />
      <DeleteProductsModal
        visible={isDeleteModalVisible}
        onCancel={handleCancelDelete}
        onConfirm={handleDelete}
      />
      <Toaster />
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
      <Tooltip title="Click to get a tour of the app">
      <FloatButton
      // icon={<QuestionOutlined />}
      description="Help"
      onClick={()=>setOpen(true)}
      type="primary"
      shape="square"
      style={{
        right: 24,
        padding: 5
      }}
    />
    </Tooltip>

      <div style={{ padding: "10px" }}>
      <ProductsStatistic products={data} /> 
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
          <span ref={ref1}>
            <MyDropdown
              uniqueCategories={categories}
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
              
            />
            </span>
            <Button
              type="primary"
              onClick={handleDeleteModal}
              disabled={!hasSelected}
              loading={resetLoading}
              ref={ref2}
            >
              {selectedRowKeys.length === 1 ? `Delete product` : `Delete products`}
            </Button>
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
            <Button type="primary" onClick={handleDownload}  icon={<DownloadOutlined />} ref={ref5}>
              Download Report
            </Button>
          </div>
          <div>
            <span style={{ marginRight: "10px" }}>
              Show products low in stock
            </span>
            <span ref={ref3} >
            <Switch
              checked={showLowStock}
              onChange={handleToggleLowStock}
              style={{ marginRight: 8 }}
              ref={ref3}
            />
            </span>
            <strong>
              {
                
                filteredData.length > 1? <Tag>{`${filteredData.length } products`}</Tag> :
                <Tag>{`${filteredData.length } product`}</Tag>
              }
            </strong>
          </div>
        </div>

        {/* Search Input */}
        <span ref={ref4}>
        <Search
          placeholder="Search products"
          onSearch={handleSearch}
        />
        </span>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredData}
          bordered={true}
          loading={loading}
          style={{ margin: "16px 0" }}
        />
      </div>
    </div>
  );
};

export default Products;

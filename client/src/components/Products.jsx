import React, { useState, useRef } from "react";
import { Button, FloatButton, Switch, Table, Tag, Tour } from "antd";
import MyDropdown from "./MyDropdown";
import Search from "antd/es/input/Search";
import ProductModal from "./ProductModal";
import ProductsStatistic from "./ProductStats";

import toast, { Toaster } from 'react-hot-toast';
// import { QuestionOutlined } from "@ant-design/icons";

// Table Component
const Products = ({data, setData, loading, categories, error, fetchData, newRef}) => {
 

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [resetLoading, setResetLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showLowStock, setShowLowStock] = useState(false);

  const [editProductId, setEditProductId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  // Tour state
  const [open, setOpen] = useState(false);

  // Tour steps
  const steps = [
    {
      title: 'Select category',
      description: 'Hover on this button to filter by category',
      target: () => ref1.current,
    },
    {
      title: 'Delete products',
      description: 'Delete selected products',
      target: () => ref2.current,
    },
    {
      title: 'Toggle Low products',
      description: 'Toggle to view products low in number.',
      target: () => ref3.current,
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
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <span className="link" onClick={() => handleEditProduct(record.id)}>
          edit
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "",
      render: (text, record) => {
        if (record.quantity < 10) {
          return <Tag color="volcano">Restock</Tag>;
        }
        return null;
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

  // Table methods
  const start = () => {
    setResetLoading(true);
    // ajax request after empty completing
    console.log(selectedRowKeys)
    setTimeout(() => {
      setSelectedRowKeys([]);
      setResetLoading(false);
    }, 1000);
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
    setSelectedCategory(categories[selected.key]);
    // Implement your logic to handle the selected category
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
              onClick={start}
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
          </div>
          <div>
            <span style={{ marginRight: "10px" }}>
              Show products low in stock
            </span>
            <span ref={ref3} visible={false}>
            <Switch
              checked={showLowStock}
              onChange={handleToggleLowStock}
              style={{ marginRight: 8 }}
              ref={ref3}
            />
            </span>
            <strong>
              <Tag>{`${filteredData.length} products`}</Tag>
            </strong>
          </div>
        </div>

        {/* Search Input */}
        <Search
          placeholder="Search products"
          onSearch={handleSearch}
         
        />
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

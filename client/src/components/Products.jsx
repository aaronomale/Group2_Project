import React, { useState, useEffect } from "react";
import { Button, Table, Tag } from "antd";
import Loader from "./Loader";
import MyDropdown from "./MyDropdown";
import Search from "antd/es/input/Search";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
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
    render: (text, record) => <a href={`/edit/${record.id}`}>Edit</a>,
  },
  {
    title: 'Alert',
    dataIndex: '',
    render: (text, record) => {
      if (record.quantity < 10) {
        return <Tag color="volcano">Low Quantity</Tag>;
      }
      return null;
    },
  }
];

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [resetLoading, setResetLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) && // Filter by category
      (searchTerm === '' ||
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )) // Filter by search term
  );

    // Search input handler
    const handleSearch = (value) => {
      setSearchTerm(value);
    };

  // Table methods
  const start = () => {
    setResetLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setResetLoading(false);
    }, 1000);
  };
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // console.log(result)

        // Extracting unique categories using Set
        const uniqueCategories = [
          ...new Set(result.map((item) => item.category)),
          'All'
        ];

        // Map the server data to Ant Design table data structure
        const antDesignData = result.map((item) => ({ ...item, key: item.id }));

        setData(antDesignData);
        setCategories(uniqueCategories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <MyDropdown uniqueCategories={categories} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={resetLoading}
            >
              Delete Product(s)
            </Button>
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>

          <strong><span>{`Total items: ${filteredData.length}`}</span></strong>
        </div>

        {/* Search Input */}
        <Search
          placeholder="Search products"
          onSearch={handleSearch}
          style={{ marginBottom: 16 }}
        />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredData}
        />
      </div>
    </div>
  );
};

export default Products;

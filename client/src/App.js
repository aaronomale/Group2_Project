import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import "./App.css";

import Products from "./components/Products";
import AppLayout from "./components/Layout";
import NewProductModal from "./components/NewProductModal";
import toast, { Toaster } from 'react-hot-toast';
import LowStockAlert from "./components/LowStockAlert";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const refNew = useRef(null);

   // Notification
   const notify = (type,message) => {
    type === 'success' ? toast.success(message) : toast.error(message);
  };

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
        "All",
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

  

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <AppLayout>
        <h1>Smart Inventory</h1>
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={() => setModalVisible(true)}
          style={{ float: "right" }}
          ref={refNew}
        >
          New Product
        </Button>
        <LowStockAlert totalProducts={data.length} lowStockProducts={data.filter(item => item.quantity < 10).length} />
        <Products 
        data={data} 
        setData={setData} 
        categories={categories}
        setCategories={setCategories}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        fetchData={fetchData}
        newRef={refNew}

        />
        <NewProductModal
          visible={modalVisible}
          setModalVisible={setModalVisible}
          onCancel={() => setModalVisible(false)}
          notify={notify}
          fetchData={fetchData}
        />
        <Toaster />
      </AppLayout>
    </div>
  );
}

export default App;

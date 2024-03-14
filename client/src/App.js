import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import "./App.css";

import Products from "./components/Products";
import AppLayout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <AppLayout>
        <h1>Product List</h1>
        <Button type="primary" icon={<PlusCircleFilled />}>
          New Product
        </Button>
        <Products />
      </AppLayout>
    </div>
  );
}

export default App;

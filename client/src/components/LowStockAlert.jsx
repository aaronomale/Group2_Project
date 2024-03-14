import React from 'react';
import { Alert } from 'antd';

const LowStockAlert = ({ totalProducts, lowStockProducts }) => {
  return (
    <div>
      {lowStockProducts > 0 && (
        <Alert
          message={`Low Stock Alert: ${lowStockProducts} products are low in stock`}
          description={`Out of ${totalProducts} products, ${lowStockProducts} are currently low in stock. Consider restocking to prevent shortages.`}
          type="warning"
          showIcon
          closable
          style={{width:"500px"}}
        />
      )}
    </div>
  );
};

export default LowStockAlert;

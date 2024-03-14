import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const ProductsStatistic = ({ products }) => {
  // Calculate the number of products with quantities below 20
  const lowStockCount = products.filter(product => product.quantity < 10).length;

  // Calculate the number of products with quantities in a good range
  const goodStockCount = products.filter(product => product.quantity >= 10).length;

  return (
    <div style={{marginBottom:"20px"}}>
    <Row gutter={10}>
      <Col span={5}>
        <Card bordered={true}>
          <Statistic
            title="Products Below 10"
            value={lowStockCount}
            valueStyle={{
              color: '#cf1322',
            }}
            prefix={<ArrowDownOutlined />}
          />
        </Card>
      </Col>
      <Col span={5}>
        <Card bordered={true}>
          <Statistic
            title="Good Range"
            value={goodStockCount}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<ArrowUpOutlined />}
          />
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default ProductsStatistic;

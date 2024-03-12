import React from 'react';
import {  Flex, Spin } from 'antd';

const Loader = () => (
    <div style={{margin: "auto", marginTop:"20px"}}>
  <Flex gap="small" vertical>
    <Flex gap="small">
      <Spin tip="Loading..." size="large">
        <div className="content" />
      </Spin>
    </Flex>
   
  </Flex>
  </div>
);
export default Loader;
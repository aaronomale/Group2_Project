import React from 'react';
import {  Flex, Spin } from 'antd';

const Loader = () => (
    <div style={{ height:"100%", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20px"}}>
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
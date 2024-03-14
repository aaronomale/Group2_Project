import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';


const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

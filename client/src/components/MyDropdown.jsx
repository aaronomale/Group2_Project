import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MyDropdown = ({ uniqueCategories, onSelectCategory, selectedCategory }) => {
  const categoryItems = uniqueCategories.map((category, index) => ({
    key: `${index}`,
    label: category,
  })).sort((a, b) => a.label.localeCompare(b.label));

  const handleSelectCategory = (key) => {
    onSelectCategory(key);
  };

  const menuStyle = {
    maxHeight: '200px', // Adjust the max height as needed
    overflowY: 'auto', // Enable vertical scrolling
  };

  const menu = (
    <Menu onClick={handleSelectCategory} style={menuStyle}>
      {categoryItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <span style={{marginLeft:"10px", marginRight:"10px"}}>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>
          <strong style={{marginRight:"5px"}}>{selectedCategory ? `Category: ${selectedCategory}` : 'Filter Category'}</strong>
          <DownOutlined />
        </Button>
      </Dropdown>
    </span>
  );
};

export default MyDropdown;

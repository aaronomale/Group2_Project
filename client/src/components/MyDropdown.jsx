import React from 'react';
import { Button, Dropdown, Menu } from 'antd';

const MyDropdown = ({ uniqueCategories, onSelectCategory, selectedCategory }) => {
  const categoryItems = uniqueCategories.map((category, index) => ({
    key: `${index}`,
    label: category,
  }));

  const handleSelectCategory = (key) => {
    onSelectCategory(key);
  };

  const menu = (
    <Menu onClick={handleSelectCategory}>
      {categoryItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

 

  return (
    <span style={{marginLeft:"10px", marginRight:"10px"}}>
        <Dropdown overlay={menu} placement="bottomCenter">
      <Button>
        {selectedCategory ? `Category: ${selectedCategory}` : 'Filter Category'}
      </Button>
    </Dropdown>
    </span>
    
  );
};

export default MyDropdown;

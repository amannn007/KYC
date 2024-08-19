// src/components/Sidebar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FileOutlined, PieChartOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider theme="dark">
      <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/product-details">Product Details</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}>
          <Link to="/compare-products">Compare Products</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

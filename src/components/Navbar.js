// src/components/Navbar.js
import React from 'react';
import { Layout, Avatar, Menu } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ background: '#001529', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ marginLeft: '16px', fontSize: '24px', color: '#fff' }}>
        <HomeOutlined style={{ fontSize: '32px', marginRight: '8px' }} />
        MyApp
      </div>
      <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', marginRight: '24px' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Products</Menu.Item>
        </Menu>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default Navbar;

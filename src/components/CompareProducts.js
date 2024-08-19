// src/components/CompareProducts.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const CompareProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [compareList, setCompareList] = useState(location.state?.compareList || []);
  const [allProducts, setAllProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setAllProducts(data.products));
  }, []);

  const handleRemove = (id) => {
    const updatedList = compareList.filter(product => product.id !== id);
    setCompareList(updatedList);
    navigate('/compare-products', { state: { compareList: updatedList } });
  };

  const handleAddToCompare = (product) => {
    if (compareList.length < 4 && !compareList.some(item => item.id === product.id)) {
      const updatedList = [...compareList, product];
      setCompareList(updatedList);
      navigate('/compare-products', { state: { compareList: updatedList } });
    }
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="danger" onClick={() => handleRemove(record.id)}>Remove</Button>
      ),
    },
  ];

  const modalColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => handleAddToCompare(record)}
          disabled={compareList.length >= 4 || compareList.some(item => item.id === record.id)}
        >
          Add to Compare
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={compareList} columns={columns} rowKey="id" />
      <Button type="primary" onClick={() => setIsModalVisible(true)} disabled={compareList.length >= 4}>
        Add More
      </Button>
      <Modal
        title="Add More Products"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        <Table dataSource={allProducts} columns={modalColumns} rowKey="id" />
      </Modal>
    </div>
  );
};

export default CompareProducts;

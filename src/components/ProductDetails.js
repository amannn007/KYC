// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleCompare = (product) => {
    if (compareList.length < 4 && !compareList.some(item => item.id === product.id)) {
      const updatedList = [...compareList, product];
      setCompareList(updatedList);
      navigate('/compare-products', { state: { compareList: updatedList } });
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (text, record) => (
        <span className={compareList.some(item => item.id === record.id) ? 'highlight' : ''}>{text}</span>
      ),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: (a, b) => a.brand.localeCompare(b.brand),
      render: (text, record) => (
        <span className={compareList.some(item => item.id === record.id) ? 'highlight' : ''}>{text}</span>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (text, record) => (
        <span className={compareList.some(item => item.id === record.id) ? 'highlight' : ''}>{text}</span>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.category.localeCompare(b.category),
      render: (text, record) => (
        <span className={compareList.some(item => item.id === record.id) ? 'highlight' : ''}>{text}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => handleCompare(record)}
          disabled={compareList.some(item => item.id === record.id)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return <Table dataSource={products} columns={columns} rowKey="id" />;
};

export default ProductDetails;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPortal from './pages/AdminPortal';
import ProductList from './pages/ProductList';
import Nav from './components/nav';
import Drawer from './components/drawer';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // const handleAddProduct = (product) => {
  //   setProducts([...products, product]);
  // };

  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString() // Generate a unique ID for the product
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, ...updatedProduct };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
    <Nav/>
    <Drawer/>
      <Router>
        <Routes>
          <Route
            path="/adminportal"
            element={<AdminPortal onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} onEditProduct={handleEditProduct} products={products} />}
          />
          <Route path="/products" element={<ProductList products={products} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

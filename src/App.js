import React from "react";
import { Switch,Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Exchanges , News ,CryptoDetails , Cryptocurrencies } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                </Routes>
                <Routes>
                    <Route exact path="/exchanges" Component={Exchanges} />
                </Routes>
                <Routes>
                    <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
                </Routes>
                <Routes>
                    <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
                </Routes>
                <Routes>
                    <Route exact path="/news" Component={News} />
                </Routes>
                    
            </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            CryptoApp <br/>
            All rights reserved
        </Typography.Title>
        <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
};

export default App;

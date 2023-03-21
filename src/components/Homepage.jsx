import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

const Homepage = () => {

//  const [coinStats,setCoinStats] = useState([]);

  const { data, isFetching } = useGetCryptosQuery(100);
  console.log(data);
  const globalStats = data?.data?.stats;
  // console.log(data);

//  useEffect(()=>{
//   const data = fetch('https://coinranking1.p.rapidapi.com/coins', {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '20c763f7bcmshab3762271b10723p155e9cjsneb8326f9ff24',
// 			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// 		},
// 	})
// 		.then(response => response.json())
// 		.then(response => setCoinStats(response))
// 		.catch(err => console.error(err));
//  },[])

//  console.log(coinStats);

//  if(coinStats==[]){
//   return(
//     <>
//     <h1>Loading...</h1>
//     </>
//   )
//  }
  
if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges}/></Col> 
        <Col span={12}><Statistic title="Total Market Cap" value={globalStats.totalMarketCap}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={globalStats.total24hVolume}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets}/></Col> 
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 CryptoCurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      < Cryptocurrencies props={true}/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest CryptoCurrencies news</Title>
        <Title level={3} className='show-more'><Link to="/news">Show more</Link></Title>
      </div>
      < News simplified/>
    </>
  )
}

export default Homepage
import React, {useState, useEffect} from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import { Card, Row, Col , Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({props}) => {
  console.log(props);
  // console.log(simplified);
  // const count = props ? 10 : 100;
  let count;
  if(props === true){
    count = 10;
  }else{
    count = 100;
  }
  
  
  const { data , isFetching } = useGetCryptosQuery(count);
  
const [cryptos, setCryptos] = useState([]);

const [searchTerm , setSearchTerm ] = useState('');

useEffect(()=>{
  // setSearchTerm(data?.data?.coins);

  const filteredData = data?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  setCryptos(filteredData);
},[data, searchTerm])

// useEffect(()=>{
//     setCryptos(cryptoList);
// },[])

//  useEffect(()=>{
//   const data = fetch(`https://coinranking1.p.rapidapi.com/coins?limit=${count}`, {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '20c763f7bcmshab3762271b10723p155e9cjsneb8326f9ff24',
// 			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// 		},
// 	})
// 		.then(response => response.json())
// 		.then(response => setCryptos(response))
// 		.catch(err => console.error(err));
    
//   },[]);
  
//   console.log(cryptos);
  
//   if(cryptos==[]){
//     return(
//       <>
//       <h1>Loading...</h1>
//       </>
//     )
//    }

if(isFetching) return 'Loading...';
  return (
    <>
    {!props && (
    <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>

    )}
      <Row gutter={[32,32]} className='crypto-card-container'>
            {cryptos?.map((currency)=>(
              <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                <Link to={`/crypto/${currency.id}`}>
                  <Card 
                       title={`${currency.rank}. ${currency.name}`}
                       extra={<img className='crypto-image' src={currency.iconUrl} />}
                       hoverable
                       >
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Change: {millify(currency.change)} %</p>
                       </Card>
                </Link>
              </Col>
            ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '20c763f7bcmshab3762271b10723p155e9cjsneb8326f9ff24',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: ,
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
      
//     }
//   };\

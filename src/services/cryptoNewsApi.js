import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
}

const baseUrl =  process.env.REACT_APP_NEWS_API_URL;

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptosNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
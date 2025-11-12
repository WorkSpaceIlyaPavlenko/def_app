import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ 
        baseUrl: '/api' 
    }),
    tagTypes: ['Users', 'Product', 'Artist','Category',
    'VerificationRequests', 'AdminUser',
    'ArtistCreationData','Favorites',
    'Orders', 'SearchList'
    ],
    endpoints: () => ({}),
})
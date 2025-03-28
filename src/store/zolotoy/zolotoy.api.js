import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://89.169.153.191:3001/',
    prepareHeaders: headers => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth', 'Review', 'Prices'],
  endpoints: build => ({
    login: build.mutation({
      query: credentials => ({
        url: 'signin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    registration: build.mutation({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    getReviews: build.query({
      query: () => ({
        url: 'reviews',
      }),
      providesTags: ['Review'],
    }),
    postReview: build.mutation({
      query: ({ data }) => ({
        url: `reviews`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteReview: build.mutation({
      query: ({ data, reviewId }) => ({
        url: `reviews/${reviewId}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    getPrices: build.query({
      query: () => ({
        url: 'prices',
      }),
      providesTags: ['Prices'],
    }),

    patchPricesData: build.mutation({
      query: data => ({
        url: `prices`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Prices'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLazyGetReviewsQuery,
  usePostReviewMutation,
  useDeleteReviewMutation,
  useLazyGetPricesQuery,
  usePatchPricesDataMutation,
} = api;

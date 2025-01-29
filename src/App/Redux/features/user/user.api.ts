import { TAPIParams } from '@/Types'
import { baseAPI } from '../../api/baseAPI'

const userAPI = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: (data: { email: string; password: string }) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      })
    }),
    register: build.mutation({
      query: (data: { name: string; email: string; password: string }) => ({
        url: '/auth/create-user',
        method: 'POST',
        body: data
      })
    }),
    getAllBooks: build.query({
      query: params => {
        console.log(params)
        const queries = new URLSearchParams()
        if (params) {
          params?.forEach((element: TAPIParams) =>
            queries.append(element.name, element.value)
          )
        }

        return {
          url: '/products',
          method: 'GET',
          params: queries
        }
      }
    }),
    getBookById: build.query({
      query: bookId => ({
        url: `/products/${bookId}`,
        method: 'GET'
      })
    }),
    sendReview: build.mutation({
      query: payload => ({
        url: `/products/review`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Review']
    }),
    getReviews: build.query({
      query: bookId => ({
        url: `/products/review/${bookId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),
    createOrder: build.mutation({
      query: payload => ({
        url: '/orders',
        method: 'POST',
        body: payload
      })
    }),
    verifyOrder: build.query({
      query: orderId => ({
        url: `/orders/verify-order/${orderId}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useSendReviewMutation,
  useGetReviewsQuery,
  useCreateOrderMutation,
  useVerifyOrderQuery
} = userAPI

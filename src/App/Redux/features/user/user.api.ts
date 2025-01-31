import { TAPIParams } from '@/Types'
import { baseAPI } from '../../api/baseAPI'

export const userAPI = baseAPI.injectEndpoints({
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
      },
      providesTags: ['Book']
    }),
    getBookById: build.query({
      query: bookId => ({
        url: `/products/${bookId}`,
        method: 'GET'
      })
    }),
    deleteBook: build.mutation({
      query: bookId => ({
        url: `/products/delete-book/${bookId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Book']
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
    updateOrderStatus: build.mutation({
      query: payload => ({
        url: `/orders/update-order-status/${payload}`,
        method: 'PUT'
      }),
      invalidatesTags: ['Order']
    }),
    verifyOrder: build.query({
      query: orderId => ({
        url: `/orders/verify-order/${orderId}`,
        method: 'GET'
      })
    }),
    getAllOrders: build.query({
      query: orderId => ({
        url: `/orders/get-orders/${orderId}`,
        method: 'GET'
      })
    }),
    getAllOrdersForAdmin: build.query({
      query: () => ({
        url: '/orders/all-orders',
        method: 'GET'
      }),
      providesTags: ['Order']
    }),
    updateProfile: build.mutation({
      query: payload => ({
        url: '/user/update-profile',
        method: 'PATCH',
        body: payload
      })
    }),
    blockUser: build.mutation({
      query: payload => ({
        url: '/user/deactivate-user',
        method: 'PATCH',
        body: payload
      }),
      invalidatesTags: ['User']
    }),
    updatePassword: build.mutation({
      query: payload => ({
        url: '/user/update-password',
        method: 'PUT',
        body: payload
      })
    }),
    getAllUsers: build.query({
      query: () => ({
        url: '/user/get-all-user',
        method: 'GET'
      }),
      providesTags: ['User']
    }),
    updateBook: build.mutation({
      query: payload => ({
        url: 'products/update-book',
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['Book']
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
  useVerifyOrderQuery,
  useUpdateProfileMutation,
  useGetAllOrdersQuery,
  useUpdatePasswordMutation,
  useGetAllUsersQuery,
  useGetAllOrdersForAdminQuery,
  useBlockUserMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useUpdateOrderStatusMutation
} = userAPI

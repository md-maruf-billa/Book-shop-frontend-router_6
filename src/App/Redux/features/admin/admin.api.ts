import { baseAPI } from '../../api/baseAPI';

const adminAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createNewBook: build.mutation({
      query: (formData) => ({
        url: '/products',
        method: 'POST',
        body: formData, 
      }),
      invalidatesTags:["Book"]
    }),
  }),
});

export const { useCreateNewBookMutation } = adminAPI;

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdaptor = createEntityAdapter();
const initialState = userAdaptor.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (responseData) => {
        return userAdaptor.setAll(initialState, responseData);
      },
    }),
  }),
});

export const selectUsersResult = apiSlice.endpoints.getUsers.select();



// export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
//   const response = await getAllUsers();
//   return response.data;
// });

// export const deleteApiUser = createAsyncThunk(
//   "/users/deleteApiUser",
//   async (initialUserId) => {
//     await deleteUser(initialUserId);
//     return initialUserId;
//   }
// );

// export const addNewUser = createAsyncThunk(
//   "/users/addNewUser",
//   async (initialUser) => {
//     const response = await createUser(initialUser);
//     return response.data;
//   }
// );

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(fetchUsers.fulfilled, userAdaptor.setAll)
  //         .addCase(addNewUser.fulfilled, userAdaptor.addOne)
  //         .addCase(deleteApiUser.fulfilled, userAdaptor.removeOne);
  // },
});

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
);

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  userAdaptor.getSelectors((state) => selectUsersData(state) ?? initialState);

export const { useGetUsersQuery } = extendedApiSlice;

export default usersSlice.reducer;

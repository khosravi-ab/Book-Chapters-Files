"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useGetUsersQuery = exports.selectUserById = exports.selectAllUsers = exports.selectUsersResult = exports.extendedApiSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _apiSlice = require("../api/apiSlice");

var extendedApiSlice = _apiSlice.apiSlice.injectEndpoints({
  endpoints: function endpoints(builder) {
    return {
      getUsers: builder.query({
        query: function query() {
          return "/users";
        },
        transformResponse: function transformResponse(responseData) {
          return userAdaptor.setAll(initialState, responseData);
        }
      })
    };
  }
});

exports.extendedApiSlice = extendedApiSlice;

var selectUsersResult = _apiSlice.apiSlice.endpoints.getUsers.select();

exports.selectUsersResult = selectUsersResult;
var userAdaptor = (0, _toolkit.createEntityAdapter)();
var initialState = userAdaptor.getInitialState(); // export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
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

var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: initialState,
  reducers: {} // extraReducers: (builder) => {
  //     builder
  //         .addCase(fetchUsers.fulfilled, userAdaptor.setAll)
  //         .addCase(addNewUser.fulfilled, userAdaptor.addOne)
  //         .addCase(deleteApiUser.fulfilled, userAdaptor.removeOne);
  // },

});
var selectUsersData = (0, _toolkit.createSelector)(selectUsersResult, function (usersResult) {
  return usersResult.data;
});

var _userAdaptor$getSelec = userAdaptor.getSelectors(function (state) {
  return state.users;
}),
    selectAllUsers = _userAdaptor$getSelec.selectAll,
    selectUserById = _userAdaptor$getSelec.selectById;

exports.selectUserById = selectUserById;
exports.selectAllUsers = selectAllUsers;
var useGetUsersQuery = extendedApiSlice.useGetUsersQuery;
exports.useGetUsersQuery = useGetUsersQuery;
var _default = usersSlice.reducer;
exports["default"] = _default;
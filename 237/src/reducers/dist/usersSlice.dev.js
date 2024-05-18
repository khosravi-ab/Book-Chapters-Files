"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _blogsServices = require("../services/blogsServices");

// const userAdaptor = createEntityAdapter();
// const initialState = userAdaptor.getInitialState();
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
var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: initialState,
  reducers: {} // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUsers.fulfilled, userAdaptor.setAll)
  //     .addCase(addNewUser.fulfilled, userAdaptor.addOne)
  //     .addCase(deleteApiUser.fulfilled, userAdaptor.removeOne);
  // },

}); // export const { selectAll: selectAllUsers, selectById: selectUserById } =
//     userAdaptor.getSelectors((state) => state.users);

var _default = usersSlice.reducer;
exports["default"] = _default;
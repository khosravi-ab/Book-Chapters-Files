"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _blogsSlice = _interopRequireDefault(require("../reducers/blogsSlice"));

var _usersSlice = _interopRequireDefault(require("../reducers/usersSlice"));

var _apiSlice = require("../api/apiSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _toolkit.configureStore)({
  reducer: _defineProperty({
    blogs: _blogsSlice["default"],
    users: _usersSlice["default"]
  }, _apiSlice.apiSlice.reducerPath, _apiSlice.apiSlice.reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_apiSlice.apiSlice.middleware);
  }
}); //Fetch all users from api
// store.dispatch(fetchUsers());

exports.store = store;
console.log(_apiSlice.apiSlice.endpoints.getUsers);
store.dispatch(_apiSlice.apiSlice.endpoints.getUsers.initiate());
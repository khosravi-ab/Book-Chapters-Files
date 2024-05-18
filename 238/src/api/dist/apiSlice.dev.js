"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEditBlogMutation = exports.useAddNewBlogMutation = exports.useGetBlogQuery = exports.useGetBlogsQuery = exports.apiSlice = void 0;

var _react = require("@reduxjs/toolkit/query/react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var apiSlice = (0, _react.createApi)({
  reducerPath: "api",
  //state.api
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: "http://localhost:9000"
  }),
  tagTypes: ["BLOG"],
  endpoints: function endpoints(builder) {
    return {
      getBlogs: builder.query({
        query: function query() {
          return "/blogs";
        },
        providesTags: function providesTags() {
          var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var error = arguments.length > 1 ? arguments[1] : undefined;
          var arg = arguments.length > 2 ? arguments[2] : undefined;
          return ["BLOG"].concat(_toConsumableArray(result.map(function (_ref) {
            var id = _ref.id;
            return {
              type: "BLOG",
              id: id
            };
          })));
        }
      }),
      getBlog: builder.query({
        query: function query(initialBlogId) {
          return "/blogs/".concat(initialBlogId);
        },
        providesTags: function providesTags(result, error, arg) {
          return [{
            type: "BLOG",
            id: arg
          }];
        }
      }),
      addNewBlog: builder.mutation({
        query: function query(initialBlog) {
          return {
            url: "/blogs",
            method: "POST",
            body: initialBlog
          };
        },
        invalidatesTags: ["BLOG"]
      }),
      editBlog: builder.mutation({
        query: function query(blog) {
          return {
            url: "/blogs/".concat(blog.id),
            method: "PUT",
            body: blog
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return [{
            type: "BLOG",
            id: arg.id
          }];
        }
      })
    };
  }
});
exports.apiSlice = apiSlice;
var useGetBlogsQuery = apiSlice.useGetBlogsQuery,
    useGetBlogQuery = apiSlice.useGetBlogQuery,
    useAddNewBlogMutation = apiSlice.useAddNewBlogMutation,
    useEditBlogMutation = apiSlice.useEditBlogMutation;
exports.useEditBlogMutation = useEditBlogMutation;
exports.useAddNewBlogMutation = useAddNewBlogMutation;
exports.useGetBlogQuery = useGetBlogQuery;
exports.useGetBlogsQuery = useGetBlogsQuery;
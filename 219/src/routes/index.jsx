import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import SingleBlogPage from "../components/SingleBlogPage";
import CreateBlogForm from "../components/CreateBlogForm";
import EditBlogForm from "../components/EditBlogForm";
import UsersList from "../components/UsersList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3 className="text-center"> چیزی پیدا نکردیم 🤗 ...</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blogs/:blogId",
        element: <SingleBlogPage />,
      },
      {
        path: "/blogs/create-blog",
        element: <CreateBlogForm />,
      },
      {
        path: "/editBlog/:blogId",
        element: <EditBlogForm />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },

    ],
  },
]);

import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogDeleted, selectBlogById } from "../reducers/blogsSlice";
const SingleBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector((state) => selectBlogById(state, blogId));

  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش می گردی وجود ندارد 🤗</h2>
      </section>
    );
  }

  const handleDelete = () => {
    if (blog) {
      dispatch(blogDeleted({ id: blog.id }));
      navigate("/");
    }
  };

  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>

        <p className="blog-content">{blog.content}</p>
        <Link to={`/editBlog/${blog.id}`} className="button">
          ویرایش پست
        </Link>
        <button
          className="muted-button"
          style={{ marginRight: "10px" }}
          onClick={handleDelete}
        >
          حذف پست
        </button>
      </article>
    </section>
  );
};

export default SingleBlogPage;

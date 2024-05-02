import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { selectAllBlogs } from "../reducers/blogsSlice";
import ShowTime from "./ShowTime";

const BlogsList = () => {
  const blogs = useSelector(selectAllBlogs);
  const navigate = useNavigate();

  const renderedBlogs = blogs.map((blog) => (
    <article className="blog-excerpt" key={blog.id}>
      <h3>{blog.title}</h3>
      <div style={{ marginTop: "10px" }}>
        <ShowTime timestamp={blog.date} />
      </div>
      <p className="blog-content">{blog.content.substring(0, 100)}</p>

      <Link to={`/blogs/${blog.id}`} className="button muted-button">
        دیدن کامل پست
      </Link>
    </article>
  ));

  return (
    <section className="blog-list">
      <button
        className="full-button  accent-button"
        style={{ marginTop: "1rem" }}
        onClick={() => {
          navigate("/blogs/create-blog");
        }}
      >
        ساخت پست جدید
      </button>
      <h2>تمامی پست ها</h2>
      {renderedBlogs}
    </section>
  );
};

export default BlogsList;

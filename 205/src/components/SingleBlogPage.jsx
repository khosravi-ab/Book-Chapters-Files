import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleBlogPage = () => {
  const { blogId } = useParams();

  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );
  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش می گردی وجود ندارد 🤗</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>

        <p className="blog-content">{blog.content}</p>
        <Link to={`/editBlog/${blog.id}`} className="button">
          ویرایش پست
        </Link>
      </article>
    </section>
  );
};

export default SingleBlogPage;

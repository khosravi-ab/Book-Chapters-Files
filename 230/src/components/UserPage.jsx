import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/usersSlice";
import { selectUserBlogs } from "../reducers/blogsSlice";


const UserPage = () => {
    const { userId } = useParams();

    const user = useSelector((state) => selectUserById(state, userId));

    const userBlogs = useSelector((state) => selectUserBlogs(state, userId));

    const blogTitles = userBlogs.map((blog) => (
        <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user.fullname}</h2>

            <ul>
                {userBlogs.length > 0 ? (
                    blogTitles
                ) : (
                    <li style={{ listStyleType: "none" }}>
                        نویسنده هیچ پستی تا به الان منتشر نکرده است. 🤗
                    </li>
                )}
            </ul>
        </section>
    );
};

export default UserPage;

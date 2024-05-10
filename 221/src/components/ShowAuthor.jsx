import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/usersSlice";

const ShowAuthor = ({ userId }) => {
    const author = useSelector((state) => selectUserById(state, userId));
    return <span>توسط {author ? author.fullname : "نویسنده ناشناس"}</span>;
};

export default ShowAuthor;

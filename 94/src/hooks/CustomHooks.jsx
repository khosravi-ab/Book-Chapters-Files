import { useState } from "react";
import { useFetch } from "../CustomHooks/useFetch";
import { useUpdateLogger } from "../CustomHooks/useUpdateLogger";


const CustomHooks = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [users] = useFetch("https://mocki.io/v1/448b84e1-8623-434a-b5c8-784c43567e3f");
  console.log(users);

  useUpdateLogger(showUsers);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-danger text-center">
        آشنایی با هوک های شخصی سازی شده
      </h5>
      <hr className="bg-dark" />
      <button
        className="btn btn-block btn-success"
        onClick={() => setShowUsers((prevShowUsers) => !prevShowUsers)}
      >
        نمایش کاربران  😇
      </button>
      {showUsers
        ? users.map((user, index) => (
            <div key={index}>
              <p className="alert alert-light">{`نام : ${user.name}`}</p>
            </div>
          ))
        : null}

    </div>
  );
};

export default CustomHooks;

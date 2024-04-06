import { useRef, useEffect, useState } from "react";

const UseRefExample = () => {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const prevState = useRef("");

  //const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  //  });

  const renderCount = useRef(1);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  useEffect(() => {
    prevState.current = name;
  }, [name]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
  inputRef.current.focus();
  };

  return (
    <>
      <div className="w-50 d-grid gap-2 mx-auto">
        <h5 className="alert alert-success text-center">
          آشنایی با هوک useRef
        </h5>        
        <p>{`نام شما برابر است با : ${name}`}</p>
        <p>{`نام قبلی شما برابر بود با : ${prevState.current}`}</p>
        {/* <p>{`میزان رندرهای انجام شده تا به الان برابر است با : ${renderCount}`}</p> */}
        <p>{`میزان رندرهای انجام شده تا به الان برابر است با : ${renderCount.current}`}</p>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="نام را وارد نمایید"
        />
        <button
          type="button"
          onClick={focusInput}
          className="btn btn-primary btn-block mt-2"
        >
          فکوس نمایید 👀
        </button>
      </div>
    </>
  );
};

export default UseRefExample;

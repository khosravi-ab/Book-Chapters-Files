const Count = ({ count, setCount }) => {
    return (
        <div>
            <p>شما {count} بار کلیک کردی</p>
            <button onClick={() => setCount(count + 1)}>کلیک کن</button>
        </div>
    );
};
export default Count;

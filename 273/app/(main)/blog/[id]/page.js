const Blog = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h3>وبلاگ من</h3>
      <h4>{params.id} اولین پست</h4>
    </div>
  );
};
export default Blog;

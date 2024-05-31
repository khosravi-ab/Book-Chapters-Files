export async function generateStaticParams() {
  const posts = await fetch("https://mocki.io/v1/448b84e1-8623-434a-b5c8-784c43567e3f").then((res) =>
      res.json()
  );

  console.log(posts);

  const final = posts.map((post) => ({
      id: String(post.id),
      userId: String(post.id),
  }));

  console.log(final);

  return final;
}

const Blog = ({ params }) => {
  console.log("Params:", params);
  return (
      <div>
          <h3>وبلاگ من</h3>
          <h4>{params.id} اولین پست :</h4>
      </div>
  );
};

export default Blog;

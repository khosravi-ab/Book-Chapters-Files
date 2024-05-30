// export const metadata = {
//   title: {
//     default:"About",
//     // absolute: "About",
//   },
// };

export function generateMetadata({ params, searchParams }) {
  console.log(searchParams);
  return {
    title: searchParams.name,
  };
}

const About = () => {
  return (
    <div>
      <h3>درباره من</h3>
      <h2>درباره من اول</h2>
    </div>
  );
};
export default About;

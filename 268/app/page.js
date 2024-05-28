import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>سلام دوست من</h1>
      {/* <Link href="/about" replace  prefetch={false}>درباره من</Link> */}
      <Link href={`/blog/${post.id}`}>لینک</Link>
      <Link href={{ pathname: "/about", query: { name: "abbas" }, }}>
        درباره من
      </Link>
    </main>
  );
}

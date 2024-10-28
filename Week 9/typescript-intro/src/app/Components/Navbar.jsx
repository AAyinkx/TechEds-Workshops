import Link from "next/link";
export default function Navbar() {
  return (
    <div className="text-center text-xl mt-3 mb-6">
      <Link className="px-2" href="/">
        Home 🏠
      </Link>
      <Link className="px-2" href="/posts">
        Posts 📬
      </Link>
      {/* <Link href="/sign-in">Sign In 👋 </Link>
      <Link href="/sign-up">Sign Up 🆕</Link> */}
    </div>
  );
}

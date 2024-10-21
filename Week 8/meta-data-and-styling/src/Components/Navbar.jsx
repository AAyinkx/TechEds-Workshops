import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav>
        <Link className="bg-blue-200" href="/">
          Home 🛖
        </Link>
        <Link href="/about">About ℹ️</Link>
        <Link href="/products">Products 🛒</Link>
        <Link href="/products/75">Product 75</Link>
      </nav>
    </>
  );
}

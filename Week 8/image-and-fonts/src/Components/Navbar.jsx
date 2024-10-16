import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">Home 🛖</Link>
        <Link href="/coasters">Coasters 🎢</Link>
      </nav>
    </>
  );
}

import { ActiveLink } from "@/Components/ActiveLink";
export default function NavbarTwo() {
  return (
    <div className="text-center text-xl mt-3">
      <ActiveLink href="/">Home 🏠</ActiveLink>
      <ActiveLink href="/slow">Slow 🐌</ActiveLink>
      <ActiveLink href="/fast">Fast 🏃‍➡️</ActiveLink>
    </div>
  );
}

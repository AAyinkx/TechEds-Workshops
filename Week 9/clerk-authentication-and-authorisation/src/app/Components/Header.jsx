import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
export default function Header() {
  const { userId } = auth();
  return (
    <>
      <h1 className="text-center text-4xl">Authentication with Clerk</h1>
      <div className="absolute top-5 right-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="absolute top-2 right-5">
        <SignedOut>
          <SignInButton className="px-1 py-2" mode="modal">
            Sign In 👋
          </SignInButton>

          <SignUpButton className="px-1  py-2">Sign Up 🆕</SignUpButton>
        </SignedOut>
      </div>
    </>
  );
}

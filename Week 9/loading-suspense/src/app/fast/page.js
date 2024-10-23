import { Suspense } from "react";
import SlowComponent from "@/Components/Slow";
import { BeatLoader } from "react-spinners";
export default function FastPage() {
  return (
    <>
      <h1 className="text-center text-2xl mt-6">Fast Page 🏃‍➡️</h1>
      <Suspense
        fallback={
          <>
            <p className="text-teal-600">Loading...</p>
            <BeatLoader loading={true} color="#61DAFB" />
          </>
        }
      >
        <SlowComponent />
      </Suspense>
    </>
  );
}

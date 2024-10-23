"use client";
import { BeatLoader } from "react-spinners";
export default function Loading() {
  return (
    <div>
      <p className="text-teal-600">Loading your slow page...</p>
      <BeatLoader loading={true} color="#61DAFB" />
    </div>
  );
}

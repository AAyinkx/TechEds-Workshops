"use client";
import ThemeButton from "@/components/ThemeButton";
import { useTheme } from "@/context/ThemeContext";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      <h1>HomePage</h1>
      <ThemeButton />
    </div>
  );
}

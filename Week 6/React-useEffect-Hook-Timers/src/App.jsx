// import { useState } from "react";
import "./App.css";
import TimerDirty from "./Components/TimerDirty";
import TimerClean from "./Components/TimerClean";
import Timer from "./Components/Timer";
import { useTimer } from "./Utils/useTimer";

export default function App() {
  const count = useTimer();
  return (
    <>
      <TimerDirty />
      <TimerClean />
      <div>
        <h1>Timer</h1>
        <div>Count: {count}</div>
      </div>
      <Timer />
    </>
  );
}

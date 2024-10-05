import { useTimer } from "../Utils/useTimer";

export default function Timer() {
  const count = useTimer();

  return <div>Count: {count}</div>;
}

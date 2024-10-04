import "./App.css";
import { useState } from "react";
import icecreamData from "./lib/icecreamData.json";
import IcecreamContainer from "./Components/IcecreamContainer";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h1>The ice cream Shop</h1>
      {icecreamData.map((icecream) => (
        <div key={icecream.id}>
          <IcecreamContainer
            id={icecream.id}
            name={icecream.name}
            flavour={icecream.flavour}
            price={icecream.price}
          />
        </div>
      ))}

      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible ? <p>Hello World</p> : null}
    </>
  );
}

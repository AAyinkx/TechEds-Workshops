import { useState } from "react";

export default function IcecreamContainer(props) {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setShowInfo(!showInfo);
  }

  return (
    <>
      <h2 onClick={handleClick}>{props.name}</h2>
      {showInfo ? (
        <>
          <p>{props.flavour}</p>
          <p>{props.price}</p>
        </>
      ) : null}
    </>
  );
}

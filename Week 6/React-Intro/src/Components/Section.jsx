import "./Section.css";
export default function Section(props) {
  return (
    <>
      <h2 id={props.h2id}>{props.subtitle} </h2>
      <h1 id={props.h1id}>{props.mainTitle}</h1>
      <img width={props.width} height={props.height} src={props.src}></img>
      <button>{props.button}</button>
    </>
  );
}

import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import "./App.css";

export default function () {
  return (
    <>
      <Navbar />
      <Section
        h2id="section-1"
        h1id="main-title-1"
        subtitle="This is the first subtitle"
        mainTitle="This is the first main title"
        button="FIRST!"
        src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
        width="125"
        height="200"
      />
      <Section
        h2id="section-2"
        h1id="main-title-2"
        subtitle="This is the second subtitle"
        mainTitle="This is the second main title"
        button="SECOND!"
        src="https://img.freepik.com/free-photo/beautiful-flowers-field_23-2150788801.jpg"
        width="125"
        height="200"
      />
      <Section
        h2id="section-3"
        h1id="main-title-3"
        subtitle="This is the third subtitle"
        mainTitle="This is the third main title"
        button="THIRD!"
        src="https://i.pinimg.com/originals/15/e3/fb/15e3fb5c702becb42865bd5811b25b63.jpg"
        width="125"
        height="200"
      />
    </>
  );
}

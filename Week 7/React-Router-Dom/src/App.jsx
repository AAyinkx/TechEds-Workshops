import "./App.css";
import icecreamData from "./lib/icecreamData.json";
import IcecreamContainer from "./Components/IcecreamContainer";
import Header from "./Components/Header";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
//Importing Routes and Toute to build my navigation
import PageNotFound from "./Components/PageNotFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/iceCreams"
          element={icecreamData.map((icecream) => (
            <div key={icecream.id}>
              <IcecreamContainer
                id={icecream.id}
                name={icecream.name}
                flavour={icecream.flavour}
                price={icecream.price}
              />
            </div>
          ))}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
//Catch all '*' route catches all othe undefined routes

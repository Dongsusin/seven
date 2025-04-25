import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
      ></meta>
      <Header />
      <Home />
    </div>
  );
}

export default App;

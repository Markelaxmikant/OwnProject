import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Newsletter />
    </div>
  );
}

export default App;

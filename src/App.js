import "./App.scss";
import Banner from "./components/Banner";
import Header from "./components/Header";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <FAQ />
    </div>
  );
};

export default App;

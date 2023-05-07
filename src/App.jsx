import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      {/*Background*/}
      <div className="main">
        <div className="gradient" />
      </div>
      {/*Components*/}
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;

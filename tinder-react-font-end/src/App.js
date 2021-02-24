import "./App.css";

// import components
import Header from "./Components/Header/Header";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import TinderCards from "./Components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <SwipeButtons />
      <TinderCards />
    </div>
  );
}

export default App;

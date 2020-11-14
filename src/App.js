import "./App.css";
import Icon from "iconjs";

function App() {
  return (
    <div className="App">
      <Icon icon="plus" />
      <Icon icon="credit-card" />
      <Icon
        icon="credit-card"
        color="#000"
        fill="#8800ff"
        accent="#000"
        accent2="#00ff00"
        stroke="2"
      />
      <Icon icon="credit-card" fill="#000" stroke="0" />
    </div>
  );
}

export default App;

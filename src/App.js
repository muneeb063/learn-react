// {} this is used to give attributes to the class e.g, {id: "heading", }
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// rootReact.createElement => object => when rendere then it becomes HTMLElement

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<AppLayout />); // this is how we render a functional component

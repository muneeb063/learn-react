// {} this is used to give attributes to the class e.g, {id: "heading", }

import React from "react";
import ReactDOM from "react-dom/client";

// rootReact.createElement => object => when rendere then it becomes HTMLElement

const title = <h1 className="head">Hello World from JSX!</h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">This is a Heading from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />); // this is how we render a functional component

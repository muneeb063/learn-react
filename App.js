// {} this is used to give attributes to the class e.g, {id: "heading", }

import React from "react";
import ReactDOM from "react-dom/client";

// rootReact.createElement => object => when rendere then it becomes HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");

console.log(heading); // this will give object

const jsxHeading = <h1 id = "heading">Hello World from JSX!</h1>

console.log(jsxHeading); // this will also give object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
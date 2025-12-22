// {} this is used to give attributes to the class e.g, {id: "heading", }

import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React from React.createElement!"
);

console.log(heading); // object representation of the element

const root = createRoot(document.getElementById("root"));

root.render(heading);

// For nested elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", {key: "child-1-h1"}, "I am H1"),
    React.createElement("h2", {key: "child-1-h2"}, "I am H2"), // siblings should be in an array
  ]),
  React.createElement("div", { id: "child", key: "child2" }, [
    React.createElement("h1", {key: "child-2-h1"}, "I am H1"),
    React.createElement("h2", {key: "child-2-h2"}, "I am H2"), // siblings should be in an array
  ]),
]);
console.log(parent);

root.render(parent);

// {} this is used to give attributes to the class e.g, {id: "heading", }
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello, React from React.createElement!");
console.log(heading); // object representation of the element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// For nested elements
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ])
]);
console.log(parent);
root.render(parent);

//# sourceMappingURL=Learn React.6bd02f5a.js.map

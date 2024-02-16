import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { className: "heading" }, [
  "Hello World from ",
  React.createElement("span", { className: "span" }, "React JS!"),
]);
const paragraph = React.createElement(
  "p",
  { className: "paragraph" },
  "Lorem ipsum is simply a dummy text...."
);
const container = React.createElement("div", { className: "container" }, [
  heading,
  paragraph,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

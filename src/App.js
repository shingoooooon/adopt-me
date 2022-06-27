import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Gaku" animal="Dog" breed="Dachshund" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sakura" animal="Cat" breed="Scottish fold" />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Gaku",
//       animal: "Dog",
//       breed: "Dachshund",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sakura",
//       animal: "Cat",
//       breed: "Scottish fold",
//     }),
//   ]);
// };

ReactDOM.render(<App />, document.getElementById("root"));

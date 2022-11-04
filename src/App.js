import MyHeading, { MyHeading2 as H2, MyHeading3 as H3 } from "./components/MyHeading";
const a = 200;
function App() {
  return <div>
    <MyHeading name="hello" sur="world" value="200"/>
    <h1>Hello World {a}</h1>
    <p>First Functional Component</p>
  </div>
}

export default App;
export { H2, H3 };
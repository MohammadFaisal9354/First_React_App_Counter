import logo from './logo.svg';
import './App.css';
import {Comp} from "./Components/comp.js";
function App() {
  const arr=[
    {
      title: "Component 1",
      price:10

    },
    {
      title:"Component 2",
      price:11

    },
    {
      title:"Component 3",
      price:12

    },
    {
      title:"Component 4",
      price:15

    }
  ];
  return (
    <div className="App">
      {/* <Comp title="Pro" price={123} />   */}
      {arr.map((e,ind)=>(      
      <div  key={ind}>
        <Comp title ={e.title} price ={e.price} />
          </div>))}
      
    </div>
  );
}

export default App;

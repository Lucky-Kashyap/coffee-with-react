import "./App.css";
import React, { useState } from "react";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Footer from "./components/Footer";

function App() {
  // let count=0;
  const [count,setCount] = useState(0);

  // const username = "Divyanshu Kashyap";

  const add = ()=>{
    // count +=1;
    setCount(count+1);
    console.log(count);
  }
  const sub = ()=>{
    
    setCount(count-1);
    console.log(count);
  }
  return (
    <div className="app">
      {/* <h1>Create react app </h1> */}
      <div className="box">
        <p>{count}</p>
        <button onClick={add} className="add">Add</button>
        <button onClick={sub} className="sub">Sub</button>
      </div>

      {/* <Header/>
      <Card/>
      <Footer/> */}
      {/* {React.createElement('h2',{},'Heading2')}
      <h3>Created By : {username}</h3> */}
    </div>
  );
}

export default App;

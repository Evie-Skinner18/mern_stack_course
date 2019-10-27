import React from 'react';
import dogImage from './dog-unsplash.jpg';
import './App.css';

// declare a component by making a function, whose result is stored in a var. You can pass a param, props
const Hello = (props) => {
  return (
    <>
      <h1>Hello {props.name}, what's your fave {props.thing}?</h1>
    </>
  )
}

// Photo by Charles 🇵🇭 on Unsplash
const App = () => {
  const todaysDate = new Date().toDateString();
  let name = "Dibby";
  let thing = "beer";

  return (
    <div>
      <Hello name={name} thing={thing}/>
      <h2>Happy Hacktoberfest!</h2>
      <h2>Today's date is {todaysDate}</h2>
      <img src={dogImage} className="App-logo" alt="logo"/>
    </div>
    )
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

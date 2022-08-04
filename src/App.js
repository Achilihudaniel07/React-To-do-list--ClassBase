import MyComponent from './MyComponent';
import MyClassComponent from './MyClassComponent';
import MyCounter from './MyCounter';
import MyTodolist from './MyTodolist';
// import logo from './logo.svg';
import './App.css';


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

// export default App;


function App() {
  const info ="Information about Developer"
  return (
    <div className="App">
      <header className="App-header">
            {/* <MyComponent info={info} 
                name="Daniel" 
                age="19" 
                career="Web developer" 
                tribe="Igbo" 
                religion="Christain" 
            /> */}

            {/* <MyClassComponent 
                name ="Kesh"
            /> */}

            {/* <MyCounter/> */}

            <MyTodolist/>
      </header>
    </div>
  );
}

export default App;

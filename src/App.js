import MyClassComponent from './MyClassComponent';
import MyTodolist from './MyTodolist';
import './App.css';

function App() {
  const info ="Information about Developer"
  return (
    <div className="App">
      <header className="App-header">
           

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

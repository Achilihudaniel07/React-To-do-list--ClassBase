import MyTodolist from '../components/body/MyTodolist';
import Footer from '../components/footer/Footer';
import './App.css';

function App() {
  return (
    <div  className='container'>
      <div className="App">                           
        <MyTodolist/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;

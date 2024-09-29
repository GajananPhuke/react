import Mylist from './component/MyList';
import ErrorMessage from './component/ErrorMsg';
import './App.css'


// let MyList = ["Banana","Oranges","Dal","Soyabin","Vigitables","ghi","Roti","Milk"];

function App() {
  
  return <>
        <h1>Healthy Food</h1>
        <Mylist></Mylist>
        <ErrorMessage></ErrorMessage>
  </>
}

export default App

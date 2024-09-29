import { Button } from "bootstrap";
import AppName from "./component/AppName";
import ToDoApp1 from "./component/ToDo1";
import ToDoApp2 from "./component/ToDo2";
import ToDoApp3 from "./component/ToDo3"; 
import "./App.css";
function App(){
  return  <center class="ToDo-Container">
      <AppName/>
      <ToDoApp1/>
      <div class="item-container">
        <ToDoApp2/>
        <ToDoApp3/>
      </div>
      
    </center>
 
  
}

export default App;
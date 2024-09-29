
import style from './App.module.css'
import ButtonContainer from './component/ButtonCon'
import DisplayUI from './component/DiplayScreen'


function App() {


  return <div className={style.claculator}>
            <DisplayUI></DisplayUI>
           {/* <input type='text' className={style.display}/> */}
         
         <ButtonContainer></ButtonContainer>
          {/* <div className={style.buttonContainer}>
            <button className={style.button}>C</button>
          </div> */}

    </div>
  
}

export default App



import style from './ButtonCon.module.css'

const ButtonContainer  = () =>{
  const buttonArr = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  return (<div className={style.buttonContainer}>
    {
      buttonArr.map(val => <button className={style.button}>{val}</button>)
    }
  </div>
  )
}

export default ButtonContainer;
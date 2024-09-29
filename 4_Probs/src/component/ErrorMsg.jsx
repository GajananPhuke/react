
// let MyList = ["Banana","Oranges","Dal","Soyabin","Vigitables","ghi","Roti","Milk"];
let MyList =[];


const ErrorMessage = ()=>{
      return<div>
          {MyList.length===0 && <h2>I am still hungry</h2>}
      </div>
        
      
}

export default ErrorMessage;
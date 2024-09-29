
let MyList = ["Banana","Oranges","Dal","Soyabin","Vigitables","ghi","Roti","Milk"]; 

// let MyList = [];

const Mylist = ()=>{
  
  return (
    <ul className='list-group'>
          {MyList.map((item)=>(
                <li key={item} className="list-group-item">{item}</li>
            ))}
        </ul>
  );
}
export default Mylist;
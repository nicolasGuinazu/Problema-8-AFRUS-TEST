import { useState } from 'react';
import Container from './components/Container';

function App() {

  let [initialArray,setInitialArray]=useState([{column:'column'}])
  let onChangeHandler=(event)=>{
    if (event.target.value<16){
      let newArr=[]
      for(let i=1;i<=event.target.value;i++){
          newArr.push({column:`column ${i}`,image:'https://giving.agency/wp-content/uploads/2019/06/unnamed.png'}) 
      }
      setInitialArray(newArr)
    }
   
  }

  return (
    <>
  
    <div className="input">
    <input type="number" onChange={onChangeHandler}/>
    </div>
    <div className="app">
     {initialArray.map((el)=><Container content={el.column} imagesrc={el.image}/>)}
    </div>
    </>
  );
}

export default App;

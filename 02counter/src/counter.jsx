import { useState } from "react";
function Counter(){
    let [count1,setvalue]=useState(0);
    let add=()=>{
        setvalue(count1+1)
    }
    let remove=()=>{
        if(count1===0){
            count1=0;
        }
        else{
            setvalue(count1-1)
        }
    }
    return(
        <>
        <h2>Count Value : {count1}</h2>
        <button onClick={add}>Add Value</button>
        <br />
        <button onClick={remove}>Remove Value</button>
          </>

    )
}
export default Counter
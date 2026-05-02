import { useState } from "react"



    const Counter = ()=>
{
    const[Counter,setcounter] = useState(0)

    const increment = ()=>
    {
        setcounter(Counter+1)
    }

    const decrement = ()=>
    {
         if (Counter > 0) {
      setcounter(Counter - 1);
    }
    }

    const reset = ()=>
    {
        setcounter(0)
    }

    return(
        
       <div className="container">
        <h1>Dynamic Counter App</h1>
        <div className="main">
        <h1>Provide Your Review</h1>
        <h1>{Counter}</h1>
        {
            Counter ===0?<p style={{color:"red", fontWeight:"bold"}}>Minimum limit reached</p> :null
        }<br/><br/>
        <div className="but1">
            <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
       </div>
       </div>
    )
}



export default Counter
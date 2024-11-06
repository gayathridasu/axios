
import { useState } from "react";
import Hello_out from "./out";

function Hello(){

    var [ischan, setischan] = useState(true);

    var clk =()=>{

        setischan(!ischan)
    }

    return(
        <>
        <h1>parent</h1>

        <button onClick={clk}>click me</button>


        {ischan ? <Hello_out/> : null}
        
        </>
    )
}
export default Hello;
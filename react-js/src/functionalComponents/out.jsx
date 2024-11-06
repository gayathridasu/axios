import {useEffect } from "react";



function Hello_out(){

    var [ischan1, setischan1] = useState(true);

    var clk1 =()=>{

        setischan1(!ischan1)
    }

    // useEffect(()=>{

    //     console.log("mount");

    //     return ()=>{
    //         console.log("unmount");
            
    //     };
        
    // },[]);

    return(
        <>
       <h1>child</h1>

       <button onClick={clk1}>click me</button>


{ischan1 ? <Hello_out/> : null}
        </>
    )
}
export default (Hello_out); 
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

function Helloo() {

    var [data, setdata] = useState([]);

    function Hell() {
        axios.get("http://localhost:3000/posts", {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((val) => {
            console.log(val.data);

            setdata(val.data)

        })
    }

    useEffect(() => {

        Hell()
    }, [])

    var del=(val,ind)=>{
      
        axios.delete("http://localhost:3000/posts/"+val.id).then((val)=>{
            
            console.log(val);

            Hell();

            
        })
    }

    var edi=(val,ind)=>{
        
        var j={
            title:prompt("hello")
        }
        
      
        axios.patch("http://localhost:3000/posts/"+val.id,j,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((val)=>{
            
            console.log(val);
            
            Hell();

            
        })
    }

    var dat = data.map((val, ind) => {

        return (
            <div key={ind}>
                <li>
                {val.title}
                 <button 
                 onClick={()=>{
                    del(val,ind)
                 }}>delete
                 </button>
                 <button
                 onClick={()=>{
                    edi(val,ind)
                 }}>
                    edit
                 </button>
                </li>
            </div>
        )

    })

    var hhh = (event) => {

        event.preventDefault();
        var p = {
            title: event.target[0].value
        }

        axios.post("http://localhost:3000/posts", p, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((val) => {
            console.log(val);
            Hell();

        });
    };

    return (
        <>
            <h1>Todo with axios</h1>

            <form action="" onSubmit={hhh}>
                <input type="text" name="user" />

                <input type="submit" value="submit" />
            </form>
            <ul>
                {dat}
            </ul>

        </>
    )
}
export default Helloo;
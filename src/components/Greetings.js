import React,{useState} from "react";

const Greetings = () => {
    const [greet,setgreet]=useState("")
    const [value,setvalue] = useState(false);
    function update(e)
    {
        setgreet(e.target.value);
        setvalue(!value)
    }
    // function update(e)
    // {
    //     let a=e.target.value
    //     if( a.trim() !== "")
    //     setgreet("hello"+a)
    //     else
    //     setgreet("")
    // }
return(
    <div>
        <input type="text" onChange={update}/>
        
       { value ? <p> Hello {greet}</p> :""}
    </div>
)
}
export default Greetings;
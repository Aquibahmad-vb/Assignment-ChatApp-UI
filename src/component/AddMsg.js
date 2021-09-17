import React,{ useState } from 'react';


export const AddMsg = (props) => {
    // creating varibale for storing usser msg.
    const [msg,setMsg]=useState("");

    // function call on submit event
    const submit = (event)=>{
        event.preventDefault();
        // if input field is empty show alert box
        if(!msg)
        {
            alert("type some msg");
        }
        // calling addMsg function defined in app.js
        else{
            // store time of msg send 
            const msgtime=new Date();
            props.addMsg(msg,msgtime);
            // clearing input field after sending event
            setMsg("");
        }
    }
    return (
        <div className="Addmsg">
            <form onSubmit={submit}>
                <input type="text" className="forms" id="textinput" value={msg} onChange={(event)=>
                    {setMsg(event.target.value)}} placeholder="Type a message"/>
                <button type="submit" className="forms" id ="submitbtn">SEND</button>
          
            </form>
        </div>
    );
}

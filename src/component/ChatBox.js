import React from 'react'
import {Msg} from "./Msg";
import {AddMsg} from "./AddMsg";
// importing chatbox.css file which contain all css
import "./ChatBox.css";

export const ChatBox = (props) => {
    return (
        // dividing canvas into 2 part component and typemsg
        <div className="canvas">
            {/* container contain all previous msg */}
            <div className="container box">
                {/*msg component */}
            <Msg msg={props.getDataFromServer()}/>
            </div>
            {/* typemsg containg input field and submit butttont */}
            <div className="typemsg box">
                {/* Add msg component */}
            <AddMsg addMsg={props.addMsg}/>
            </div>           
        </div>
    );
}

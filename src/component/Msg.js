import React from 'react';
import {MsgItem} from "./MsgItem";

export const Msg = (props) => {
    return (
        <div>
            {/* mapping data and getting all data by loop */}
            {props.msg.map((msg)=>{
                // msgitem compoenent
                return <MsgItem msg={msg} key={msg._id}/>
            }
            )}
            
        </div>
    );
}

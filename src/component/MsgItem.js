import React from 'react'

export const MsgItem = ({msg}) => {
    
    // function for changing createdat dateformat into times ago
    const neardate = (da)=>{
        let dateobj=new Date(da);
        let seconds = Math.floor((new Date() - dateobj) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    return (
        <div>
        {
            // if sender is user then allign msg to right side of scren
            (msg.sender==="user") ? 
            ( <>
            <p className="users" id="user">{msg.sender}</p>
            <div className="msg" id="right">
                <div id="pad">
                    <h5 id="message">{msg.message}</h5>
                    <p id="time">{neardate(msg.createdAt)}</p>
                </div>
            </div> <br/><br/><br/>
            </>) :
            // if sender is agent then align item into left side of screen
            <> 
            <p className="users" id="agent">{msg.sender}</p>
            <div className="msg" id="msg">
            <div id="pad">
            <h5 id="message">{msg.message}</h5>
            <p id="time">{neardate(msg.createdAt)}</p>
            </div>
        </div>
        </>

        }
    </div>
    );
}

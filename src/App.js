import './App.css';
import React,{ useState } from 'react';
import {ChatBox} from "./component/ChatBox";

function App() {

  // addMsg function create a new msg object and add newmsg obj to data 

  const addMsg=(msg,msgtime)=>{
    const newmsg={
      message:msg,
      createdAt:msgtime,
      sender:"user",
      _id:data[data.length-1]._id+1
    }
    // adding newmsg object to data
    setdata([...data,newmsg]);

    // print newmsg object to console
    console.log(newmsg);
    // console.log(data)
  }

  // it return data 
  const getDataFromServer=()=>{
    return data
  }

  // data
  const [data,setdata]=useState([{
    message: "Hi user",
    createdAt: "2021-09-14T13:23:02.298Z",
    sender: "agent",
    _id: 1,
  },
  {
    message: "How are you doing today",
    createdAt: "2021-09-14T13:23:02.298Z",
    sender: "user",
    _id: 2,
  },
  {
    message: "I am good, how about you",
    createdAt: "2021-09-14T13:23:02.298Z",
    sender: "agent",
    _id: 3,
  },
  {
    message: "I am good, thanks for asking",
    createdAt: "2021-09-14T13:23:02.298Z",
    sender: "user",
    _id: 4,
  },
  {
    message: "How can I help you today ?",
    createdAt: "2021-09-14T13:23:02.298Z",
    sender: "agent",
    _id: 5,
  }])


  return (
    // chatbox component and passing getdatafromserver and addmsg function to it.
    <>
    <ChatBox getDataFromServer={getDataFromServer} addMsg={addMsg}/>
    </>
  );
}

export default App;

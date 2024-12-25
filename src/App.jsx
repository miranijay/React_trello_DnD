import React, { useState } from "react";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Main from "./components/Main.jsx";
import { Boardcontext } from "./context/boardcontext.jsx";

export default function App() {

  const boardData = {
    active: 0,
    boards:[
      {
        name: "My Trello app",
        bgcolor: "#069000",
        list:[
          {id:"1", title:"To do", items:[{id:"cdrFt", title:"Project Description 1"}]},
          {id:"2", title:"In Progress", items:[{id:"cdrFv", title:"Project Description 2"}]},
          {id:"3", title:"Done", items:[{id:"cdrFb", title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const[allboard, setallboard] = useState(boardData)


  return(
    <>
      <Header />
      <Boardcontext.Provider value = {{allboard, setallboard}}>
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </Boardcontext.Provider>
    </>
  )
}
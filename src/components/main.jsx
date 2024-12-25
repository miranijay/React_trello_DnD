import React, { useContext } from "react";
import { Edit2, MoreHorizontal, UserPlus } from "react-feather"
import Cardadd from "./cardadd.jsx";
import { Boardcontext } from "../context/boardcontext.jsx";

export default function Main() {

    const {allboard, setallboard} = useContext(Boardcontext)
    const bdata = allboard.boards[allboard.active]
    
    const carddata = (e) => {
        let newlist = [...bdata.list]
        
    }

    return(
        <div className="main">
            <div className="title-board">
                <h2>{bdata.name}</h2>
                <div className="share-btn">
                    <button className="share"> <UserPlus size={16}></UserPlus> Share</button>
                    <button style={{background:"none", border:"none", color:"white", cursor:"pointer"}}><MoreHorizontal size={18}></MoreHorizontal></button>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"100%",flexGrow:"1",position:"relative" }}>
                <div style={{position:"absolute", marginBottom:"4px", paddingBottom:"6px",left:"0",bottom:"0", right:"0", top:"0", padding:"18px", display:"flex", overflowX:"scroll", overflowY:"hidden"}}>

                    <div style={{width: "240px", marginRight:"10px", height:"fit-content", borderRadius:"4px", padding:"8px", backgroundColor:"black", flexShrink:"0"}}>
                        <div className="list-body">
                            <div style={{display:"flex", justifyContent:"space-between",padding:"8px", }}>
                                <span>To do</span>
                                <button style={{background:"none", border:"none", color:"white", cursor:"pointer"}}><MoreHorizontal size={18}></MoreHorizontal></button>
                            </div>
                            <div className="items">
                                <span>Project Description</span>
                                <span>
                                    <button style={{background:"none", border:"none", color:"white", cursor:"pointer"}}><Edit2 size={16}></Edit2></button>
                                </span>
                            </div>
                            <Cardadd getcard={(e) => carddata(e)}></Cardadd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
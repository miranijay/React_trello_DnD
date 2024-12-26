import React, { useContext, useState } from "react";
import {ChevronLeft, ChevronRight, Plus, X} from "react-feather"
import { Popover } from 'react-tiny-popover'
import { Boardcontext } from "../context/boardcontext";

export default function Sidebar() {

    const blankboard = {
        name: '',
        bgcolor: '#f60000',
        list:[]
    }
    const [boarddata, setboarddata] = useState(blankboard)
    const [collapsed, setcollapsed] = useState(false)
    const [showpop, setshowpop] = useState(false)
    

    const {allboard, setallboard} = useContext(Boardcontext)
    
    const setActiveboard = (i) => {
        let newboard = {...allboard}
        newboard.active = i
        setallboard(newboard)
    }

    const addboard = () => {
        let newB = {...allboard}
        newB.boards.push(boarddata)
        setallboard(newB)
        setboarddata(blankboard)
        setshowpop(!showpop)
    }

    return(
        <div className="sidebar" style={{ width: collapsed ? "26px" : "280px" }}>
            {collapsed && <div className="">
                <button onClick={() => setcollapsed(!collapsed)} className="icon-btn">
                    <ChevronRight size={18}></ChevronRight>
                </button>
            </div>}

            {!collapsed && <div>
                <div className="workspace">
                    <h5>Workspace</h5>
                    <button onClick={() => setcollapsed(!collapsed)} className="icon-btn">
                        <ChevronLeft size={18}></ChevronLeft>
                    </button>
                </div>
                <div className="board-list">
                    <div className="your-board">
                        <h6>Your Boards</h6>
                        <Popover
                            isOpen={showpop}
                            align="start"
                            positions={['right', 'top', 'bottom', 'left']} // preferred positions by priority
                            content={
                                <div className="pop-container">
                                    <button style={{ padding:"4px", borderRadius:"4px", backgroundColor:"grey", color:"white", border:"none", cursor:"pointer", position:"absolute", right:"8px", top:"8px" }}><X size={16}></X></button>
                                    <h4 style={{padding: "12px 0px"}}>Create Board</h4>
                                    <img src="https://placehold.co/200x120/png" alt="" />
                                    <div className="form">
                                        <label htmlFor="title">Board Title <span>*</span></label>
                                        <input value={boarddata.name} onChange={(e) => setboarddata({...boarddata,name:e.target.value})} type="text" className="form-input" />
                                        <label htmlFor="Color">Board Color</label>
                                        <input value={boarddata.bgcolor} onChange={(e) => setboarddata({...boarddata,bgcolor:e.target.value})} type="color" className="form-input" />
                                        <button onClick={() => addboard()} className="create-btn">Create</button>
                                    </div>
                                </div>
                                }
                            >
                            <button onClick={() => setshowpop(!showpop)}>
                                <Plus className="plus-icon" style={{color : "black", paddingTop: "2px", paddingInline: "2px"}} size={12}></Plus>
                            </button>
                        </Popover>
                        
                    </div>
                </div>
                <ul>
                    {allboard.boards && allboard.boards.map((x,i) => {
                        return (
                            <li key={i}>
                                <button onClick={() => setActiveboard(i)} className="board-btn">
                                    <span style={{width: "10%",
                                    height: "max-content",
                                    marginRight: "8px",
                                    background: `${x.bgcolor}`

                                    }}>&nbsp;</span>
                                    <span style={{color:"white"}}>{x.name}</span>
                                </button>
                            </li>
                        )})
                    }
                </ul>
            </div>}
        </div>
    )
}
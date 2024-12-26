import React, { useContext } from "react";
import { Edit2, MoreHorizontal, UserPlus } from "react-feather"
import Cardadd from "./cardadd.jsx";
import { Boardcontext } from "../context/boardcontext.jsx";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Addlist from "./addlist.jsx";


export default function Main() {

    const {allboard, setallboard} = useContext(Boardcontext)
    const bdata = allboard.boards[allboard.active]

    function onDragEnd(result) {
        if(!result.destination) return;

        const newlist = [...bdata.list]
        const s_id = parseInt(result.source.droppableId) 
        const d_id = parseInt(result.destination.droppableId)

        const [removed] = newlist[s_id - 1].items.splice(result.source.index, 1)
        newlist[d_id - 1].items.splice(result.destination.index, 0, removed)

        let board_ = {...allboard}
        board_.boards[board_.active].list = newlist
        setallboard(board_)
        
    }
    const carddata = (e, ind) => {
        let newlist = [...bdata.list]
        newlist[ind].items.push({id:Math.random().toString(36).substr(2, 9), title:e})

        let board_ = {...allboard}
        board_.boards[board_.active].list = newlist
        setallboard(board_)
    }

    const listdata = (e) => {
        let newlist = [...bdata.list]
        newlist.push({id:newlist.length + 1 + '', title:e, items:[]})

        let board_ = {...allboard}
        board_.boards[board_.active].list = newlist
        setallboard(board_)
    }

    const handleEdit = (listIndex, itemIndex, newTitle) => {
        let newlist = [...bdata.list];
        newlist[listIndex].items[itemIndex].title = newTitle;

        let board_ = {...allboard};
        board_.boards[board_.active].list = newlist;
        setallboard(board_);
        setEditingItem(null);
    }


    return(
        <div className="main" style={{backgroundColor:bdata.bgcolor}}>
            <div className="title-board">
                <h2>{bdata.name}</h2>
                <div className="share-btn">
                    <button className="share"> <UserPlus size={16}></UserPlus> Share</button>
                    <button style={{background:"none", border:"none", color:"white", cursor:"pointer"}}><MoreHorizontal size={18}></MoreHorizontal></button>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"100%",flexGrow:"1",position:"relative" }}>
                <div style={{position:"absolute", marginBottom:"4px", paddingBottom:"6px",left:"0",bottom:"0", right:"0", top:"0", padding:"18px", display:"flex", overflowX:"scroll", overflowY:"hidden"}}>
                <DragDropContext onDragEnd={onDragEnd}>

                    { bdata.list && bdata.list.map((x,ind) => {
                        return(
                            <div key={ind} style={{width: "240px", marginRight:"10px", height:"fit-content", borderRadius:"4px", padding:"8px", backgroundColor:"black", flexShrink:"0"}}>
                                <div className="list-body">
                                    <div style={{display:"flex", justifyContent:"space-between",padding:"8px", }}>
                                        <span>{x.title}</span>
                                        <button style={{background:"none", border:"none", color:"white", cursor:"pointer"}}><MoreHorizontal size={18}></MoreHorizontal></button>
                                    </div>
                                    <Droppable  droppableId={x.id}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={{margin:"4px 0px", backgroundColor: snapshot.isDraggingOver ? '#222' : 'transparent' }}
                                                {...provided.droppableProps}
                                            >
                                                {x.items && x.items.map((item, index) => {
                                                    return(
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <div className="items">
                                                                        <span>{item.title}</span>
                                                                        <span>
                                                                            <button style={{ marginInline:"4px", background:"none", border:"none", color:"white", cursor:"pointer"}}>
                                                                                    <Edit2 size={16}></Edit2>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                    <Cardadd getcard={(e) => carddata(e, ind)}></Cardadd>
                                </div>
                            </div>
                        )
                    })} 
                </DragDropContext>

                <Addlist getlist={(e) => listdata(e)}></Addlist>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import { Plus, X } from "react-feather";

export default function Cardadd() {

    const [card, setcard] = useState("")
    const [show, setshow] = useState(false)

    return(
        <>
            <div className="card">
                {show && <div>
                    <textarea style={{padding:"4px", borderRadius:"4px", width:"96%", marginTop:"4px", backgroundColor:"lightslategrey",outline:"none" ,border:"1px solid lightgrey" ,color:"white"}} name="" id="" placeholder="Enter Card Title..."></textarea>
                    <div>
                        <button style={{ padding:"4px", marginRight:"8px" , borderRadius:"4px", backgroundColor:"lightsteelblue", color:"black", border:"none", cursor:"pointer", }}>Add Card</button>
                        <button onClick={() => setshow(!show)} style={{ marginTop:"8px" ,padding:"4px", borderRadius:"4px", backgroundColor:"black", color:"white", border:"none", cursor:"pointer", }}><X size={16}></X></button>
                    </div>
                </div>}

                {!show && <button onClick={() => setshow(!show)} style={{display:"flex", padding:"4px", width:"100%", alignItems:"center", borderRadius:"4px", marginTop:"4px" ,height:"32px" ,justifyContent:"start", backgroundColor:"black" , color:"white", border:"none", cursor:"pointer", gap:"4px"}}>
                    <Plus size={16}></Plus> Add a card
                </button>}
            </div>
        </>
    )
}
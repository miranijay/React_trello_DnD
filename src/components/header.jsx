import React from "react";

export default function Header() {
    
    return(
        <div className="header">
            <div className="left" style={{justifyContent:"center", alignContent:"center"}}>
                <h4 style={{fontSize:"32px"}}>Trello Clone</h4>
            </div>
            <div className="right">
                <span>Username!!</span>
                <img style={{
                    width: "44px",
                    borderRadius: "30px",
                    cursor: "pointer",
                }} src="https://placehold.co/28x28/png" alt="" />
            </div>
        </div>
    )
}
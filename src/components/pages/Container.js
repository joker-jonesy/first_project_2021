import React from 'react';
import Box from "../core/Box";

function Container() {

    const data = [
        {
           name:"Clicker",
           message:"Hello there"
        },
        {
            name:"Clickee",
            message:"Hi!"
        },
    ];

    let buttons = data.map((dt,idx)=>
        <Box key={idx} dt={dt}/>
    );

    return (
        <div className="container">
            {buttons}
        </div>
    )
}

export default Container;
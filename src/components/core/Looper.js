import React from 'react';

function Looper(){
    const [loop,setLoop]=React.useState(0);
    const items = ["stuff","things","straws"];

    const loopThrough =()=>{
        setLoop(loop+1);
        if(loop===items.length-1){
            setLoop(0);
        }
    };

    return(
        <div onClick={loopThrough}>
            <button >loop</button>
            <h1>{items[loop]}</h1>
        </div>
    )
}

export default Looper
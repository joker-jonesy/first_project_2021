import React from 'react';

function Looper(props){
    const [loop,setLoop]=React.useState(0);
    const items = ["stuff","things","straws"];

    const loopThrough =()=>{
        setLoop(loop+1);
        if(loop===items.length-1){
            setLoop(0);
        }
    };

    return(
        <div style={{backgroundColor:props.match.params.color}} onClick={loopThrough}>
            <button >loop</button>
            {props.match.params.color}
            <h1>{items[loop]}</h1>
        </div>
    )
}

export default Looper
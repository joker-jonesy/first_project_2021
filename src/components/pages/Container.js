import React from 'react';
import Box from "../core/Box";

function Container() {

    const [data] = React.useState([
        {
            name: "Clicker",
            message: "Hello there",
            width: "100px"
        },
        {
            name: "Clickee",
            message: "Hi!",
            width: "300px"
        },
        {
            name: "Click",
            message: "Hey there mister!",
            width: "50px"
        }
    ]);

    const [visual, setVisual]= React.useState(data);
    const [sort, setSort]= React.useState("none");

    React.useEffect(()=>{
        let newArray;

        if(sort==="e"){
            newArray=data.filter(function(it) {
                return it.name.includes("e");
            });
        }else if(sort==="noE"){
            newArray=data.filter(function(it) {
                return !it.name.includes("e");
            });
        }else{
            newArray=data;
        }


        setVisual(newArray);

    },[data,sort]);





    let buttons = visual.map((dt, idx) =>
        <Box key={idx} dt={dt}/>
    );

    return (
        <div className="container">
            {buttons}
            <button onClick={()=>setSort("e")}>Check if it has the letter E</button>
            <button onClick={()=>setSort("noE")}>Check if it does not have the letter E</button>
            <button onClick={()=>setSort("none")}>Clear</button>
        </div>
    )
}

export default Container;
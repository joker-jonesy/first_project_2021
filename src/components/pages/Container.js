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

    //const [number, setNum] = React.useState(0);

    const [visual, setVisual]= React.useState(data);
    const [sort, setSort]= React.useState("none");

    //const [color, setColor]= React.useState("red");

    React.useEffect(()=>{

        //if()
        //if(number%5!==0)

        let newArray;

        //for (var i=0; i<number; i++)
        //push empty string into newArray i
        //[0,1, 2,....]

        //random color assign
        //if(number is divisible by 2
        //change the color based on a set of random colors

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


    //function


    let buttons = visual.map((dt, idx) =>
        //color attribute prop goes here
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
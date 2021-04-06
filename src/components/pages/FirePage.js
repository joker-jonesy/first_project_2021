import React from 'react';
import fire from "../../Fire";

function FirePage(){

    const [albums, setAlbums]=React.useState([]);
    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems=[];

        db.collection("albums").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    title:obj.title,
                    artist: obj.artist,
                    year:obj.year
                };

                console.log(obj);

                newItems.push(item);
            });

            setAlbums(newItems)
        });



        console.log()



    },[db]);

    const albumEles = albums.map((alb, idx)=>
        <div key={idx}>
            <h1>{alb.title}</h1>
            <h3>{alb.artist}</h3>
            <h3>{alb.year}</h3>
        </div>
    );

    return(
        <div>
            <h1>Fire Page</h1>
            {albumEles}
        </div>
    )
}

export default FirePage
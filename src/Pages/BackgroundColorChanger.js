import React from 'react';
import { useParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
    const params = useParams();

    return(
       <main
       style={{
        height: "100vh",
        backgroundColor: `${params.colorname}`
    }}></main>
    )
}

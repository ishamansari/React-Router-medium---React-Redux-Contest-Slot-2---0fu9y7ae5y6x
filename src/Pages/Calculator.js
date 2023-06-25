import React from "react";
import { useSearchParams } from "react-router-dom";


export const Calculator = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    return(
        <div>Your calculation is <span id="calc-result">{eval(`${searchParams.get("num1")} ${searchParams.get("op")? searchParams.get("op") : "+"} ${searchParams.get("num2")}`)}</span>
        </div>
    )
}

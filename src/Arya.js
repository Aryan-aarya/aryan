// import React from 'react';
// function Arya() {
//     return(
//         <form>
//         <label htmlFor="fname">First name:</label>
//         <br />
//         <input type="text" id="fname" name="fname" />
//         <br />
//         <label htmlFor="lname">Last name:</label>
//         <br />
//         <input type="text" id="lname" name="lname" />
//         </form>
//     )
// }
// export default Arya;
import { useState } from "react";
function Arya(){
    return(
        <div>
        <h1>hi everyone</h1>
        <MyButton />
        </div>
    );
}
function MyButton(){
    const[x,y]= useState(0);
    function a(){
        y(x + 1);
    }
    return (
        <button onClick={a}>
        Clicked {x} times
        </button>
    );
}

export default Arya;
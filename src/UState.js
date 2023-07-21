import {useState} from 'react'

function USEtate(){
const[a,setA]=useState(0);
const set = () => setA(a-5);
const[b,setB]=useState(40);
const sett = () => setB(b-5);
return(
    <>
        <button onClick={set}>Increase a</button>
        <p>{a}</p>
        <button onClick={sett}>Decrease b</button>
        <p>{b}</p>
    </>
);
}

export default USEtate;
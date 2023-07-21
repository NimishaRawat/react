import React, {useRef} from "react";

function URdemo() {
  const UR = useRef(null);
  const click = () => {
    console.log(UR.current.value);
  };
  return (
    <>
      <input ref={UR} type="text" />
      <button onClick={click}>Print Ref</button>
    </>
  );
}


export default URdemo;




import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function FirstComponent() {
    const [name, setName] = useState("Arun Rajan");

  return (
    <UserContext.Provider value={name}>
      <h1>Hi {name}!</h1>
      <SecondComponent />
    </UserContext.Provider>
  );
}
function SecondComponent() {
    return (
      <>
        <h1>Component 2</h1>
        <ThirdComponent/>
      </>
    );
  }
  
function ThirdComponent() {
    return (
      <>
        <h1>Component 3</h1>
        <FourthComponent/>
      </>
    );
  }
  
  function FourthComponent() {
    return (
      <>
        <h1>Component 4</h1>
        <FifthComponent/>
      </>
    );
  }
  
  function FifthComponent() {
    const name = useContext(UserContext);
    return (
      <>
        <h1>Component 5</h1>
        <h2>Hi {name} again!</h2>
      </>
    );
  }
  
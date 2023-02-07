import * as React from "react";

export const HelloComponent = () => {
  
  
  void function OnPressThisInvoked(){
  console.log("I am pressed");
  }

  
  const OnPressThisChanged = (event)=>{
    console.log(event);
  }

  return (
    <div>
      <button onClick={()=>{
        console.log("I am pressed");
        let i:number = 10;
        let j:number =20;        
        console.log(i+j);
        }}>Press1</button>

    <button onClick={OnPressThisChanged}>Press2</button>

      <h2>Hello component !</h2>
    </div>
  );
};

import * as React from "react";

interface Props {
  userName: string;
  age: number
}

export const HelloComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Hello user: {props.userName} !</h2>
      <h2>with Age: {props.age}</h2>
    </div>  
  );
  
};

import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("initialName");
  const [age, setAge] = React.useState(0);

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  
  const setAgeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };

  return (
    <>
      <HelloComponent userName={name} age = {age}/>
      <NameEditComponent userName={name} age={age} onUserNameChange={setUsernameState} onAgeChange={setAgeState}/>
    </>
  );
};

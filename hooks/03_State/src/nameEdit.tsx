import * as React from "react";

interface Props {
  userName: string;
  age: number;
  onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAgeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameEditComponent: React.FC<Props> = (props) => (
  <>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onUserNameChange} />
    <label>Update age:</label>
    <input value={props.age} onChange={props.onAgeChange} />
  </>
);

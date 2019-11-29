

//https://www.pluralsight.com/guides/react-typescript-module-create


import React, { FC } from "react";

export interface IRedTextProps {
  text: string;
}

const RedText: FC<IRedTextProps> = (props: IRedTextProps) => {
  const red = {
    color: "red"
  };
  return <span style={red}>Hello {props.text}</span>;
};

export default RedText;

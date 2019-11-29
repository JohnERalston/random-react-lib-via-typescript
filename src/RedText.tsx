import React, { FC } from "react";
import { IRedTextProps } from "./IRedTextProps";

const RedText: FC<IRedTextProps> = (props: IRedTextProps) => {
  const red = {
    color: "red"
  };
  return <span style={red}>Hello {props.text}</span>;
};

export default RedText;

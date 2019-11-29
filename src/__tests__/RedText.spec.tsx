import * as React from 'react';
import RedText, { IRedTextProps } from "../index";
import { render } from "@testing-library/react";

test("Component should show 'red' text 'Hello World'", () => {
  const props:IRedTextProps = {
    text: "World"
  };
  const { getByText } = render(<RedText {...props} />);
  expect(getByText(`Hello ${props.text}`)).toBeTruthy();
});

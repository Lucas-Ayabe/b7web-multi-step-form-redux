import { ChangeEvent } from "react";
const withChangeValue = (handler: (value: string) => void) => {
  return (event: ChangeEvent<HTMLInputElement>) => handler(event.target.value);
};

export default withChangeValue;

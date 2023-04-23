import React from "react";
import { Borrow } from "./borrow";
import { Lend } from "./lend";

interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Lend></Lend>
    </>
  );
};
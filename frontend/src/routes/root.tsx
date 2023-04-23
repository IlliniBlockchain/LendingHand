import React from "react";
import { Borrow } from "./borrow";

interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Borrow></Borrow>
    </>
  );
};
import React from "react";
import "../index.css"
import {Filter} from "../routes/lend/components/Filter"

interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Filter />
      {/* <h1>
        this is the root, it serves as a container for all your other pages as
        well as a place for global components. the navbar should go here because
        you want it to be rendered on every page.
      </h1> */}
    </>
  );
};

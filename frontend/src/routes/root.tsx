import React from "react";

interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
      this is the root, it serves as a container for all your other pages as
      well as a place for global components. the navbar should go here because
      you want it to be rendered on every page.
    </>
  );
};

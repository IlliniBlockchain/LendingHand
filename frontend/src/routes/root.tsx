import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import NavBar from "../components/Navbar";


interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Filter />
    <NavBar />

    </>
  );
};

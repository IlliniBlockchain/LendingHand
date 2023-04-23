import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import NavBar from "../components/Navbar";
import Grid from "../components/CardRow";
import SingleCard from "../components/Card";

interface borrowProps {}

export const Borrow: React.FC<borrowProps> = ({}) => {
  return     <>
  <NavBar />
  <Grid></Grid>
  </>;
};

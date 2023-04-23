import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import NavBar from "../components/Navbar";
import Grid from "../components/CardRow";
import SingleCard from "../components/Card";
interface lendProps {}

export const Lend: React.FC<lendProps> = ({}) => {
  return (
    <>
    <NavBar />
    <Grid></Grid>
    </>
  );
};

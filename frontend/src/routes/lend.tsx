import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import NavBar from "../components/Navbar";
import CardRow from "../components/CardRow";
import CardRow2 from "../components/moreLikeThis";
import SingleCard from "../components/Card";
import styles from "../components/CardRow.module.css"
import Box from '@mui/material/Box';
interface lendProps {}

export const Lend: React.FC<lendProps> = ({}) => {
  return (
    <>
    <NavBar />
    <Box sx={{ flexGrow: 1 }} className={styles.card}>
    <CardRow></CardRow>
    </Box>
  
    </>
  );
};

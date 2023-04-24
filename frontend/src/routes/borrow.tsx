import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { MainCard } from "../components/MainCard";
import Navbar from "../components/Navbar";
import CardRow2 from "../components/CardRows";
import cardRow from "../components/CardRows"

interface borrowProps {}

export const Borrow: React.FC<borrowProps> = ({}) => {
  return <>
    <Navbar></Navbar>
    <Box>
    <MainCard></MainCard>
    <CardRow2></CardRow2>   
    </Box>

  </>;
};

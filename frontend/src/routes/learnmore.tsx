import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { MainCard } from "../components/MainCard";
import Navbar from "../components/Navbar";
import CardRow2 from "../components/moreLikeThis";
import cardRow from "../components/moreLikeThis"

interface learnmoreProps {}

export const LearnMore: React.FC<learnmoreProps> = ({}) => {
  return <>
    <Box display="flex" flexDirection="column">
      <Navbar />
      <MainCard />
      <Typography variant="h5" style={{marginTop:"5vh", marginLeft:"15vw"}}> More like this </Typography>
      <CardRow2 />
    </Box>
  </>;
};

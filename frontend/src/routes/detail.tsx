import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { MainCard } from "../components/MainCard";
import Navbar from "../components/Navbar";
import CardRow2 from "../components/moreLikeThis";
import cardRow from "../components/moreLikeThis"

interface detailProps {}

export const Detail: React.FC<detailProps> = ({}) => {
  return (
    <>
      {/* this is the detail page when someone clicks on a card on the lend page
      they come here */}
      <Box display="flex" flexDirection="column">
      <Navbar />
      <MainCard />
      <Typography variant="h5" style={{marginTop:"5vh", marginLeft:"15vw"}}> More like this </Typography>
      <CardRow2 />
    </Box>
    </>
  );
};

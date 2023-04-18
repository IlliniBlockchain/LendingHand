import React from 'react';
import { useState } from "react";
import "./Filter.css"
//for card
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//for checkbox
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: 'px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const card = (
  <React.Fragment>
    <CardContent sx={{ height: '100%'}}>
      <Typography variant="h6" component="div">
        Filter
      </Typography>

      <Box>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Education" />
      <FormControlLabel control={<Checkbox />} label="Agriculture" />
      <FormControlLabel control={<Checkbox />} label="Women + Minorities" />
      </FormGroup>
      </Box>
      
      <Box sx={{ p: 2 }}>
      <Divider variant="middle" />   
      </Box>
      

      <FormControl>
      <Typography variant="h6" component="div">
        Sort
      </Typography>
     <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Trending"
        name="radio-buttons-group"
      > 
        <FormControlLabel value="Trending" control={<Radio />} label="Trending" />
        <FormControlLabel value="Amount-Borrowed" control={<Radio />} label={
        <>
          Amount Borrowed <br /> (Low to High)
        </>} />
        <FormControlLabel value="Borrower-Rating" control={<Radio />} label="Borrower-Rating" />
      </RadioGroup>
    </FormControl>

      

    </CardContent>
  </React.Fragment>
);

export default function Filter() {
  return (
    <Box>
      <Card sx={{ minWidth: 150, borderRadius: 3}} variant="outlined">{card}</Card>
    </Box>
  );
}
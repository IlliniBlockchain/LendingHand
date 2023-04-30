import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from './CardRow.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCard from "./Card";
import Filter from './Filter';

export default function BasicGrid() {
  return (
      <Grid container spacing={2.5} style={{paddingTop:'5vh', marginLeft:'14vw'}}>
        <Grid item xs={3}>
           <SingleCard title = "Equipment for Restaurant in Pakistan" borrower="Jane Smith" description=" I am writing to request a loan to purchase new kitchen equipment for my restaurant. This investment will help us improve the quality of our food ..." image="https://i.ytimg.com/vi/Xdya8eym9nM/maxresdefault.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <SingleCard title = "Thread for Tailors in Nepal" borrower="Jane Smith" description="I am writing to request a loan to purchase a bulk amount of thread for my tailoring business in Nepal. The loan will enable me to buy the necessary material..." image="https://share.america.gov/wp-content/uploads/2021/12/Purnaa-mastercard-ace-awards-india-nepal-women-jobs-DSC02683.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <SingleCard title = "Seeds for Farm in Kenya" borrower="Jane Smith" description="With this investment, I plan to purchase high-quality seeds and expand my crop production, which will help increase my income and contribute to the local ..." image="https://storage.googleapis.com/cgiarorg/2020/03/3eda507a-farmer-betty-bondo-in-her-field.jpg"/>
        </Grid>
      </Grid>
  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from './CardRow.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCard from "../components/Card";
import Filter from './Filter';

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.card}>
    <Grid container spacing={2} >
      <Grid item xs={3}>
         <SingleCard title = "Goats for Farm in Turkey" borrower="Jane Smith" description="I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital..." image="https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"/>
      </Grid>
      <Grid item xs={3}>
        <SingleCard title = "Textbooks for School in Thailand" borrower="John Smith" description="As an educator, I have seen firsthand the impact of having access to quality learning materials, and I believe this loan would greatly benefit the students in need." image="https://www.bangkokprep.ac.th/wp-content/uploads/BKK-Prep-At-A-Glance-6.jpg"/>
      </Grid>
      <Grid item xs={3}>
        <SingleCard title = "Houses in New Orleans" borrower="Jane Doe" description="I am writing to request a loan to build a house. The storm has left me homeless and I am in urgent need of financial assistance tont need of financial..." image="https://cdn.theatlantic.com/media/mt/food/5707633319_15ab787fc1edit.jpg"/>
      </Grid>
      <Grid item xs={3}>
      <Filter></Filter>
      </Grid>
    </Grid>
    <Grid container spacing={2} >
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

  </Box>
  );
}
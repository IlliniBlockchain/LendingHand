import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from './CardRow.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCard from "./Card";
import Filter from './Filter';

export default function BasicGrid() {
  return (
      <Grid container spacing={2.5} >
        <Grid item xs={3}>
           <SingleCard title = "Goats for Farm in Turkey" borrower="Jane Smith" description="I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital..." image="https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"/>
        </Grid>
        <Grid item xs={3}>
          <SingleCard title = "Goats for Farm in Turkey" borrower="Jane Smith" description="I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital..." image="https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"/>
        </Grid>
        <Grid item xs={3}>
          <SingleCard title = "Goats for Farm in Turkey" borrower="Jane Smith" description="I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital..." image="https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"/>
        </Grid>
      </Grid>
  );
}
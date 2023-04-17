import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import SingleCard from "./Card"
import { CardRowInterface } from '../../types';







// AKHIL'S CODE

// I NEED TO PASS IN AN *ARRAY* OF CARD COMPONENTS. HOW??!?!

const SpacingGrid = ({card} : CardRowInterface) => {
  const [spacing, setSpacing] = React.useState(10);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <SingleCard 
              name = {card?.name}
              duration = {card?.duration}
              valuation = {card?.valuation}
              reason = {card?.reason}
            />




            // <SingleCard
            //     reason = 'I Need GIGANTIC PS5'
            //     valuation= '10000'
            //     duration= '10 months'
            //     name= "Akhil Gogineni"
            //     // btn={}
            //     // image=''
            //     // badge=
            // />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpacingGrid
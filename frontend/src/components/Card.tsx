import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import styles from "./Navbar.module.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type CardProps = {
  title: string;
  borrower: string;
  description: string;
  image: string;
};


export default function RecipeReviewCard(props: CardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const parentStyles: React.CSSProperties = {
     display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  const childStyle1: React.CSSProperties = {
    width: '55%',
    height: '60%',
    alignContent: 'right',
    padding: '3px',
  };
  const childStyle2: React.CSSProperties = {
    width: '35%',
    alignContent: 'right',
    padding: '3px',
  };

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="Image"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#9932CC" }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.title}
        subheader={props.borrower}
        padding="5px"
      />
      <CardContent>
        <Typography className={styles['body']} color="text.secondary">
          {props.description}
        </Typography>
       
        <div style={parentStyles}>
          <div style={childStyle1}> <Typography fontSize={"18px"} color="black" >
          $100 raised of $500
        </Typography></div>
          <div style={childStyle2}><Chip label="Learn More" variant="outlined" onClick={handleClick} /></div>
        </div>
        
      </CardContent>
    </Card>
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import styles from "./Card.module.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type CardProps = {
  title: string;
  borrower: string;
  description: string;
  image: string;
};


export default function SingleCard(props: CardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const parentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.125'
  };

  const childStyle1: React.CSSProperties = {
    width: '55%',
    height: '60%',
    alignContent: 'right',
    paddingTop:'0.325rem'
  };
  const childStyle2: React.CSSProperties = {
    width: '35%',
    alignContent: 'right',
    paddingBottom:'0.525rem'
  };

  return (
    <div style={{paddingBottom:'1vw'}} >
    <Card sx={{ maxWidth: 400, maxHeight: 500}}>
      <CardMedia
        component="img"
        height="250"
        image={props.image}
        alt="Image"
      />
      <CardHeader className={styles.body}
        avatar={
          <Avatar sx={{ bgcolor: "#9932CC" }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.title}
        subheader={props.borrower} 
      />
      <CardContent style={{ paddingTop: '2px', paddingBottom:'2px', paddingLeft:'10px', paddingRight:'10px'}} >
        <Typography color="text.secondary">
          {props.description}
        </Typography>
       
        <div style={parentStyles}>
          <div style={childStyle1}> <Typography fontSize={"16px"} color="black" >
          $100 raised of $500
        </Typography></div>
          <div style={childStyle2}><Chip label="Learn More" variant="outlined" onClick={handleClick} /></div>
        </div>
        
      </CardContent>
    </Card>
    </div>
  );
}
import React from 'react';
import { CardInterface } from "../../types"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Star from '@mui/icons-material/Star';
import Link from '@mui/material/Link';


// AKHIL'S WORK : LMK IF YOU GUYS WANNA IMPROVE THIS



const ThisCard = ({name, reason, valuation, duration, image}: CardInterface) => {


  return (
    <Card sx={{ width: 350, bgcolor: blue[400] }}>
     
      <CardHeader      
        title={reason}
        subheader= {name}
      />

      <CardMedia
        component="img"
        height="200"
        image= {image}
        alt="I NEED A PS5 PLEASE"
      />



      <CardContent>
        <Typography variant="h5" color="text.primary">
          ${valuation}
        </Typography>
        <Typography variant="h5" color="blue">
          {duration}
        </Typography>
      </CardContent> 
      


      <IconButton 
        aria-label="Change"
        onClick={() =>  {
          console.info("I'm a button.");
        }}
      >
        {/* <Link>This Button</Link> */}
        <Star/>
      </IconButton>

      
    </Card> 
  );
}
export default ThisCard






// import Stack from '@mui/material/Stack';
// import Link from '@mui/material/Link';
// import { styled } from '@mui/material/styles';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Icons from '@mui/icons-material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Star from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));



        {/* <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Button Link
        </Link> */}

        {/* <Link href="#">Link</Link>
        <Link href="#" color="inherit">
          {'color="inherit"'}
        </Link>
        <Link href="#" variant="body2">
          {'variant="body2"'}
        </Link> */}


// <Button 
//           variant="outlined"
//           onClick={() => {
//             alert('clicked');
//             //OPENS POP-UP etc...
//           }}
//         >
//           Favorite This
//         </Button>
        
//         <Button 
//           variant="outlined"
//           onClick={() => {
//             alert('clicked');
//             //OPENS POP-UP etc...
//           }}
//         >
//           Learn More
//         </Button>


  // const [expanded, setExpanded] = React.useState(false);


  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
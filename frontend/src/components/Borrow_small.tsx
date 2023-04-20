import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material'


const cardStyle = {
  // display: "block",
  // transitionDuration: "0.3s",
  // height: "45vw",
  width: "955vw"
};


export const Borrow_small = (props:any) => {
  return <Box sx={{
    width: 1000,
    height: 300,
    bgcolor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.dark',
      opacity: [0.9, 0.8, 0.7],
    },
  }}>
    
    <Card style = {cardStyle}>
      <CardMedia component= 'img' height = '50' image = 'https://source.unsplash.com/random' alt = 'unspash image'>

      </CardMedia>

      <CardContent>
       <Typography gutterBottom variant='h5'component = 'div'>
        React</Typography>

        <Typography variant= 'body2' color = 'text.secondary'> What is React</Typography>
      </CardContent>
      <CardActions>
        <Button size = 'small'> Donate </Button>
      </CardActions>
    </Card>

  </Box>
}
 
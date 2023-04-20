import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material'

export const MainCard = (props:any) => {
  return <Box >
    <Card sx={{
    width: 800,
    height: 400,
  }}>
       
      <CardMedia component= 'img' height = '140' image = 'https://source.unsplash.com/random' alt = 'unspash image'>

      </CardMedia>

      <CardContent>
       <Typography gutterBottom variant='h5'component = 'div'>
        React</Typography>
        <Typography variant= 'body2' color = 'text.secondary'> What is React</Typography>
      </CardContent>
      <CardActions>
        <Button size = 'small'> Donate BIG </Button>
      </CardActions>
    </Card>

  </Box>
}

/*


sx={{
  width: 1000,
  height: 1000,
  bgcolor: 'primary.main',
  '&:hover': {
    backgroundColor: 'primary.dark',
    opacity: [0.9, 0.8, 0.7],
  },
}}

*/
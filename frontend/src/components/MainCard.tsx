import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material'
import styles from './Card.module.css'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CardRow2 from "./CardRows";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export const MainCard = (props: any) => {
    return (
    
    <Card className={styles.MainCard}  sx={{ marginTop: '-25vh', marginLeft: '15vw' , width: '70vw', height:'45vh'}} >
      <Box sx={{ display: 'flex', height: '80vh', width: '50vw', flexDirection: 'column', justifyContent: 'center' }}>
        <CardMedia component="img" height="400" image={"https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"} alt="unsplash image" />
      </Box>
      <Box sx={{ display: 'flex', width: '80vw', flexDirection: 'column', justifyContent: 'center'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Goats for Farm in Turkey
          </Typography>
          <Typography variant="body2" color="text.secondary">
          I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital. With the additional goats, I will be able to increase my production capacity and generate more income for my family. I would be grateful if you could consider my request and provide me with the financial assistance I need to take my business to the next level.       
          </Typography>
          <br />
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'right' }} component="div">
            $100 raised of $500 goal
          </Typography>
          <BorderLinearProgress variant="determinate" value={20} />
        </CardContent>
        <CardActions sx={{justifyContent: 'flex-end'}} style={{paddingRight:'1vw'}}>
          <Button variant="contained">Lend</Button>
        </CardActions>
      </Box>
    </Card>
      );
  };
  
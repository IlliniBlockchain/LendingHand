import React from 'react';
//for card

import Filter from "../components/Filter"
import NavBar from "../components/Navbar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';




interface profileProps {}

export const Profile: React.FC<profileProps> = ({}) => {
  return (
    <>
    <Filter />
    <NavBar />

    <div style = {{backgroundColor: "#685369"}}>
      <Box sx={{ flexGrow: 1 }} style={{width: '96rem',alignItems: "center",}}>
        <h1 style = {{color: "white"}}>PROFILE</h1>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: "100%"
        }}>
          <Card style={{backgroundColor: "white", width: '18rem' }}>
            <Grid container spacing={2}>
            <CardContent>
              <Grid item xs={4}>
                
                <Typography variant="h5" component="div">
                Account information
                </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="body2">
                Username
              </Typography>
              <TextField
                  id="outlined-multiline-static"
                  rows={4}
                />
              <br />
              <Typography variant="body2">
                Message body
              </Typography>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                />
              </div>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              </Grid>
            </CardContent>
          <CardActions>
            <Button size="small">Save changes</Button>
          </CardActions>
          </Grid>
        </Card>
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          height: "100%" }}>
        <Card style={{backgroundColor: "white", width: '18rem' }}>
          <Grid container spacing={2}>
            <CardContent>
            <Typography variant="h5" component="div">
              Open Borrows
            </Typography>
            <Card style={{backgroundColor: "#FF00FF", width: '12rem' }}>
              <CardContent>
                <Grid item xs={4}>
                  
                  <Typography variant="h6" component="div">
                  Goats for Farm in Turkey
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                <Card style={{backgroundColor: "white", width: '6rem' }}>
                  <Typography variant="body2">
                      <b>$1400</b> raised of 2800 Goal
                      <br />
                      {'"a benevolent smile"'}
                  </Typography>
                </Card>
                  
                </Grid>
              </CardContent>
            </Card>
            </CardContent>
            <CardActions>
              <Button size="small">Edit Loan</Button>
            </CardActions>
          </Grid>
        </Card>
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          height: "100%" }}>
        <Card style={{backgroundColor: "white", width: '24rem' }}>
          <Grid container spacing={2}>
            <CardContent>
            <Typography variant="h5" component="div">
              Active Loans
            </Typography>
            <Card style={{backgroundColor: "gray", width: '12rem' }}>
              <CardContent>
              <Typography variant="h5" component="div">
                Equipment for Restaurant in Pakistan
              </Typography>
              <Typography variant="h6" component="div">
                Value <b style={{backgroundColor: "magenta"}}>$250</b>
              </Typography>
              <Typography variant="h6" component="div">
                Duration <b style={{backgroundColor: "magenta"}}>6 months</b>
              </Typography>
              </CardContent>
            </Card>
            <Card style={{backgroundColor: "gray", width: '12rem' }}>
              <CardContent>
              <Typography variant="h5" component="div">
                Textbooks for school in Thailand
              </Typography>
              <Typography variant="h6" component="div">
                Value <b style={{backgroundColor: "magenta"}}>$250</b>
              </Typography>
              <Typography variant="h6" component="div">
                Duration <b style={{backgroundColor: "magenta"}}>6 months</b>
              </Typography>
              </CardContent>
            </Card>
            </CardContent>

          </Grid>
        </Card>
      </div>
    </Box>
  </div>

    </>
  );
};

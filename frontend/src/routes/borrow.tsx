import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
 } from "@mui/material";
 import { MainCard } from "../components/MainCard";
import Navbar from "../components/Navbar";
import CardRow2 from "../components/moreLikeThis";
import cardRow from "../components/moreLikeThis"
//import CloudUpload from "@mui/icons-material/CloudUpload";

interface borrowProps {}

export const Borrow: React.FC<borrowProps> = ({}) => {
  return <>
<Typography variant="h4" style={{ marginLeft: "15vw", paddingTop:"10vh" }}>
       {" "}
       BORROW{" "}
     </Typography>
     <Typography variant="h6" style={{ marginLeft: "15vw" }}>
       {" "}
       Request a loan.{" "}
     </Typography>
     <Box
       alignItems="center"
       display="flex"
       gap={8}
       sx={{
         backgroundColor: "#fff",
         ml: "15vw",
         mt: 5,
         borderRadius: 3,
         p: 5,
       }}
     >
       <Stack spacing={4}>
         <Typography variant="h4" style={{ color: "black" }}>
           {" "}
           Untitled Loan{" "}
         </Typography>
         <TextField required id="outlined-required" label="Loan Amount" />
         <TextField
           id="outlined-multiline-flexible"
           label="Description"
           multiline
           rows={4}
         />
         <TextField required id="outlined-required" label="Deadline" />
         <Button variant="contained">Submit Proposal</Button>
       </Stack>


       <Box
         alignItems="center"
         display="flex"
         flexDirection="column"
         justifyContent="center"
         sx={{
           width: 200,
           height: 200,
           borderRadius: "50%",
           border: 2,
           borderColor: "grey.500",
           "&:hover": {
             backgroundColor: "grey.100",
             opacity: [0.9, 0.8, 0.7],
           },
           color: "black",
           fontSize: 16,
           borderStyle: "dashed",
         }}
       >
         {/* <Button variant="outlined" component="label" startIcon={<CloudUpload />}>
           Upload File
           <input type="file" hidden />
         </Button> */}
       </Box>
     </Box>
     {/* <Box display="flex" flexDirection="column">
     <Navbar />
     <MainCard />
     <Typography variant="h5" style={{marginTop:"5vh", marginLeft:"15vw"}}> More like this </Typography>
     <CardRow2 />
   </Box> */}
  </>;
};

import {Grid, Typography} from "@mui/material";
import SimpleExperience from "../Experience/SimpleExperience";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { COLORS } from "../Colors";

const Experience = () => {


  const openFB = () => {
    window.open("https://www.facebook.com/dominik.kubala", '_blank', 'noopener,noreferrer');
};

const openGit = () => {
    window.open("https://github.com/Dom-Kub", '_blank', 'noopener,noreferrer');
};

const openIG = () => {
    window.open("https://www.instagram.com/domikub/", '_blank', 'noopener,noreferrer');
};

    return(
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop:10}}
      >
        <Grid item
         marginLeft={15}
         marginRight={15}
        sx={{
    borderRadius : "10px",
    backdropFilter : "blur(20px)",
    backgroundColor: "hsl(0deg 0% 9% / 30%)"}}>
         <SimpleExperience title="Help fom imigtants" description="A user was created in the project who was the owner of the application. You created partner in the application and entered their address. I entered the address using maps and after clicking on the address in the application, we knew the coordinates of the partner. The user was able to create his own cars, where it was necessary to enter the car number, consumption, and the user was also able to create a driver. The user was able to manually create a trip where he entered his address and the address of the companion, possibly refueling, then selected the car and driver, the distance traveled and the amount of fuel per minute were displayed as a result." />
        </Grid>
        <Grid item 
        marginTop={4}
         marginLeft={15}
         marginRight={15}
        sx={{
    borderRadius : "10px",
    backdropFilter : "blur(20px)",
    backgroundColor: "hsl(0deg 0% 9% / 30%)"}}>
         <SimpleExperience title="Logook" description="This project served for immigrants who needed help with employment, opening a business, and for creating other documents. I set user roles on BE (admin {ADMIN}, worker {WORKER}, client {CLIENT}), I saved the documents to the server using SMB. I used a text editor to create the document. All code was checked with SonarCube and Eslint, Prettier. In React, I created a text editor in which it was necessary to use Syncfusion to convert a Word document into sfdt type (syncfusion type) and then send it to FE. For these files, it was necessary to save, modify, delete." />
        </Grid>
        <Grid item 
         marginTop={4}
         marginLeft={15}
         marginRight={15}
         sx={{
    borderRadius : "10px",
    backdropFilter : "blur(20px)",
    backgroundColor: "hsl(0deg 0% 9% / 30%)"}}>
         <SimpleExperience title="E-Shop" description="The project was created in Java Spring. I created a simple E-shop whose task was to add product to the database, add to the cart, buy, delete, edit, describe the given product, connect to the sql database, use jpa repisitory and create tables using hibernet." />
        </Grid>
        <Grid item marginTop={20}>
                    <FacebookIcon sx={{fontSize:"48px", marginRight:2, color:COLORS.ORANGE }} onClick={openFB}/>
                    <GitHubIcon sx={{fontSize:"48px", marginRight:2, color:COLORS.ORANGE }} onClick={openGit}/>
                    <InstagramIcon sx={{fontSize:"48px", color:COLORS.ORANGE }} onClick={openIG}/>
                </Grid>
      </Grid>
    )
}
export default Experience
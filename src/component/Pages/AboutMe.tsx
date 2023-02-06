
import {Grid, Typography} from "@mui/material";
import profilePhoto from '../images/175921970_4065076140198512_8929046302971931012_n.jpeg'
import MapIcon from '@mui/icons-material/Map';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InterestsIcon from '@mui/icons-material/Interests';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Map from '../Map/Map'
import { COLORS } from "../Colors";

const AboutMe = () => {
   return(
       <Grid
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           paddingBottom={2}
           sx={{
            backgroundColor:"black"
       }}
       >
          <Grid item xs={4} paddingTop={2} paddingBottom={2}>
             {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
         <img src={profilePhoto} alt={"Profile photo"} width="200px" style={{borderRadius:"200px"}}/>
          </Grid>
          <Grid item xs={7} textAlign="left">
         <Typography variant="h5" color={COLORS.ORANGE} >About me</Typography>
             <Typography color="white">
                Hello, I'm Dominik Kubala. I'm frontend developer in React TypeScript 
             </Typography>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={7}>
             <Grid
                 container
                 direction="row"
                 justifyContent="center"
                 alignItems="center"
             >
             <Grid item xs={7} textAlign="left">
                 <div style={{
                    color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <MapIcon style={{color:COLORS.ORANGE}} />
                     <text style={{fontWeight: "bold"}}>Location:    </text>
                     <text style={{color:"white"}}> Nesluša</text>
                 </div>
             </Grid>
             <Grid item xs={5} textAlign="left">
                 <div style={{
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <FlagIcon style={{color:COLORS.ORANGE}}/>
                     <span style={{fontWeight: "bold"}}>Nationality: </span>
                     <span> Slovakia</span>
                 </div>
             </Grid>
             <Grid item xs={7} textAlign="left" marginTop={1}>
                 <div style={{
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <SchoolIcon style={{color:COLORS.ORANGE}}/>
                     <span style={{fontWeight: "bold"}}>Study: </span>
                     <span>Faculty of Management Science and Informatics</span>
                 </div>
             </Grid>
             <Grid item xs={5} textAlign="left" marginTop={1}>
                 <div style={{
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <CalendarTodayIcon style={{color:COLORS.ORANGE}}/>
                     <span style={{fontWeight: "bold"}}>Age: </span>
                     <span>24</span>
                 </div>
             </Grid>
             <Grid item xs={7} textAlign="left" marginTop={1}>
                 <div style={{
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <InterestsIcon style={{color:COLORS.ORANGE}}/>
                     <span style={{fontWeight: "bold"}}>Interests: </span>
                     <span>Football,Gym</span>
                 </div>

             </Grid>
             <Grid item xs={5} textAlign="left" marginTop={1}>
                 <div style={{
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                 }}>
                     <ApartmentIcon style={{color:COLORS.ORANGE}}/>
                     <span style={{fontWeight: "bold"}} >Employment: </span>
                     <span>VoxTech</span>
                 </div>
             </Grid>
             <Grid item marginTop={2} xs={5}>
          </Grid>
             </Grid>
          </Grid>

          
       </Grid>

   )
}
export default AboutMe
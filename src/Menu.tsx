import {Grid, MenuItem} from "@mui/material";
import {useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import { COLORS } from "./component/Colors";
import {ROUTE_TYPES} from "./RouteType";

const Menu = () => {
    const [paddingRight] = useState(9);
    const [fontSize] = useState(20);
    const navigate = useNavigate();
    const location = useLocation();
    return(
<>
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingTop={1}
        sx={{
            backdropFilter : "blur(10px)",
            backgroundColor: "hsl(0deg 0% 9% / 50%)"
        }}
    >
        <Grid item paddingRight={paddingRight}>
            <MenuItem
            sx={{
                
            }}
                style={{
                color: location.pathname === `/${ROUTE_TYPES.HOME}` ? COLORS.ORANGE : 'white' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.HOME}`)} >Home</MenuItem>
        </Grid>
        <Grid item paddingRight={paddingRight}>
            <MenuItem style={{color: location.pathname === `/${ROUTE_TYPES.ABOUT_ME}` ? COLORS.ORANGE : 'white' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.ABOUT_ME}`)} >About Me</MenuItem>
        </Grid>
        <Grid item paddingRight={paddingRight}>
            <MenuItem style={{color: location.pathname === `/${ROUTE_TYPES.EXPERIENCE}` ? COLORS.ORANGE : 'white' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.EXPERIENCE}`)} >Experience</MenuItem>
        </Grid>
        <Grid item paddingRight={paddingRight}>
            <MenuItem style={{color: location.pathname === `/${ROUTE_TYPES.HOBBIES}` ? COLORS.ORANGE : 'white' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.HOBBIES}`)} >Hobbies</MenuItem>
        </Grid>
    </Grid>
    <Outlet/>
</>
    )
}
export default Menu
import { Grid, Typography } from "@mui/material"
import { FC } from "react"
import { COLORS } from "../Colors"

interface ISimpleExperience{
    title:string,
    description:string
}

const SimpleExperience:FC<ISimpleExperience> = ({title,description}) => {

return(
<Grid
marginTop={2}
marginBottom={2}
  container
  direction="row"
  justifyContent="center"
  alignItems="center"

><Grid item xs={3}>
    <Typography color={COLORS.ORANGE} fontSize={20} style={{fontWeight: "bold"}} >
    {title}
    </Typography>

</Grid>
<Grid item xs={8} color={"white"} fontSize={20}
margin={2}
>
    <Typography>
    {description}
    </Typography>
</Grid>
</Grid>    
)
}
export default SimpleExperience
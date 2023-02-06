import { Grid, Typography } from '@mui/material';
import '../../App.css';
import { COLORS } from '../Colors';

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingTop={10}
      paddingLeft={3}
    >
      <Grid
        item
        xs={5}
        sx={{
          borderRadius: '40px',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'hsl(0deg 0% 9% / 30%)'
        }}
      >
        {' '}
        <Typography
          sx={{ color: COLORS.ORANGE }}
          fontSize={40}
          marginTop={5}
          style={{
            fontWeight: 'bold'
          }}
        >
          Frontend developer
        </Typography>
        <Typography
          className="Name"
          fontSize={60}
          style={{
            paddingLeft: 40,
            fontWeight: 'bold'
          }}
        >
          Dominik Kubala
        </Typography>
        <Typography
          marginTop={2}
          marginRight={10}
          className="Name"
          fontSize={20}
          style={{
            paddingLeft: 40,
            fontWeight: 'bold'
          }}
        >
          {' '}
          The trouble with quotes on the Internet is that you can never know if
          they are genuine.
        </Typography>
      </Grid>
      <Grid item xs={7} />
    </Grid>
  );
};
export default Home;

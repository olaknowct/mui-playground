import { Box, Grid, Typography, Rating, createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  components: {
    MuiTypograhpy: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11, // font size of variant body
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9, // font size of variant body
          },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            alt='guitar'
            className='img'
            src='https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          />
          <Box paddingX={1}>
            <Typography component='h4' variant='subtitle1'>
              John Mayer
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' margin-left={0.5}>
                5 Hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
              <Rating name='read-only' value={4.5} readOnly precision={0.5} size='small'></Rating>
              <Typography variant='body2' component='p' margin-left={0.5}>
                4.5
              </Typography>
              <Typography variant='body3' component='p' margin-left={0.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' margin-top={0}>
                From C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;

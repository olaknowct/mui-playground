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

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img alt='Tour' className='img' src={tour.image} />
          <Box paddingX={1}>
            <Typography component='h4' variant='subtitle1'>
              {tour.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' margin-left={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
              <Rating
                name='read-only'
                value={tour.rating}
                readOnly
                precision={0.5}
                size='small'
              ></Rating>
              <Typography variant='body2' component='p' margin-left={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body3' component='p' margin-left={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' margin-top={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;

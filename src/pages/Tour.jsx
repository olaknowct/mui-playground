import { Container, Typography, Box, BottomNavigation, Paper } from '@mui/material';
import ImageCollage from '../components/ImageList';
import CustomizedAccordions from '../components/Accordian';
import React from 'react';
import BasicModal from '../components/Modal';

const Tour = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src='https://media.timeout.com/images/105124791/750/422/image.jpg'
          alt=''
          height={325}
        />
        <ImageCollage></ImageCollage>
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla exercitationem quidem
          accusamus. Ex numquam hic ut quaerat facilis, harum fugit consequatur quisquam porro
          corporis quasi exercitationem dolor doloribus quam.
        </Typography>
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
};

export default Tour;

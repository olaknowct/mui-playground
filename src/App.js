import './App.css';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
function App() {
  return (
    <>
      <Button variant='contained' color='primary'>
        Click me
      </Button>
      <Button variant='outlined' color='primary'>
        Click me
      </Button>
      <Icon>
        <CheckIcon />
      </Icon>
      <Icon>star</Icon>

      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
        <Icon>add_circle</Icon>
        <Icon color='primary'>add_circle</Icon>
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon fontSize='small'>add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      </Box>
    </>
  );
}

export default App;

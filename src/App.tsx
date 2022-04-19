import React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { HomeRepairService } from '@mui/icons-material';


export const App = () => {
  return(
    <>

      <Button>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon/>
      <HomeRepairService/>
    </>

  );
};

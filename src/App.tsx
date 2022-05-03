import React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { HomeRepairService } from '@mui/icons-material';
import styled from 'styled-components';
import { ToggleButtons } from './components/ToggleButtons';



const StyledButton = styled(Button)`
  background-color: #000;
  color: salmon;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  border-radius: 50%;
  &:hover {
    background-color: #0cf;
    color: #000;
  }
`;


export const App = () => {
  return(
    <>

      <Button>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon/>
      <HomeRepairService/>
      <StyledButton>Customized</StyledButton>

      <ToggleButtons/>

    </>

  );
};

import { Box, styled } from '@mui/material';
import { Header } from '../';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      <StyledMain>
        { children }
      </StyledMain>

    </>
  )
}

const StyledMain = styled('main')`
  display: flex;
  flex-direction: column;

`;
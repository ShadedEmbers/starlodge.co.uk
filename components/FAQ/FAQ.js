import { Box, Typography, styled } from '@mui/material';

export const FAQ = ({ question, answer }) => {
  
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        {question}
      </Typography>
      <StyledAnswer dangerouslySetInnerHTML={{ __html: answer }} />
    </Box>
  )
};

const StyledAnswer = styled('p')({
  fontSize: '16px',
  lineHeight: '24px',
  'a': {
    color: '#007afc',
  }
});
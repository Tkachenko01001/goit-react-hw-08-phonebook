import { styled } from '@mui/material/styles';

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .3)',
  
    '& h2': {
      marginBottom: '20px',
      textAlign: 'center',
    },
  
    '& .MuiTextField-root': {
      marginBottom: '20px',
    },
  });

  export default StyledForm;

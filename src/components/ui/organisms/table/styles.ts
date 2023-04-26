import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  sm: {
    '& > td, & > th': {
      [theme.breakpoints.down('sm')]: {
        padding: '8px'
      },
    }
  }
}));

export default useStyles;

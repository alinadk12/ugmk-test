import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  small: {
    [theme.breakpoints.down('sm')]: {
      padding: '3px 9px',
      fontSize: '0.8125rem',
    },
  }
}));

export default useStyles;

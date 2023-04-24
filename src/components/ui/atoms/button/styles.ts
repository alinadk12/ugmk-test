import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  small: {
    [theme.breakpoints.down('sm')]: {
      padding: '3px 9px',
      fontSize: '0.8125rem',
    },
  }
}));

export default useStyles;

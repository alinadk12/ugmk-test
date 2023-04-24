import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  wrapper: {
    position: 'absolute',
    left: '10px',

    '& > button': {
      color: theme.palette.neutral100
    },

    [theme.breakpoints.down('sm')]: {
      left: '0',
    },
  },
  text: {
    marginLeft: '4px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));

export default useStyles;

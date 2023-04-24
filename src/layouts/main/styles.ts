import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.backgroundPrimary,
  },

  main: {
    padding: '24px',

    [theme.breakpoints.between('sm', 'md')]: {
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px',
    },
  },

  container: {
    width: '960px',
    margin: '0 auto',

    [theme.breakpoints.between('sm', 'md')]: {
      width: '720px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '96%',
    },
  }
}));

export default useStyles;

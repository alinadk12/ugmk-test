import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme) => ({
  body: {
    width: '100%',
    minHeight: 'calc(100vh - 12px)'
  },

  main: {
    width: '100%',
    minHeight: 'calc(100vh - 120px)',
    padding: '24px',
    backgroundColor: theme.palette.backgroundPrimary,

    [theme.breakpoints.down('md')]: {
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px',
    },
  }
}));

export default useStyles;

import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    width: '960px',
    margin: '0 auto',

    [theme.breakpoints.between('sm', 'md')]: {
      width: '720px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }
}));

export default useStyles;

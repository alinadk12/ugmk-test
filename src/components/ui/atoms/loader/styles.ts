import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 100px)'
  }
});

export default useStyles;

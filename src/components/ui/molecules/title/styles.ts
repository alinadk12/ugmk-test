import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  }
});

export default useStyles;

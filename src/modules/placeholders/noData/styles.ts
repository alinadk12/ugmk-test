import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>({
  wrapper: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default useStyles;

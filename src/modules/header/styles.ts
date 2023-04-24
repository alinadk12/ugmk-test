import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>({
  wrapper: {
    minHeight: '60px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default useStyles;

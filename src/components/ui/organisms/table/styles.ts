import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  cell: {
    [theme.breakpoints.down('sm')]: {
      padding: '8px',
    },
  }
}));

export default useStyles;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

type HeaderProps = {
  text: string,
};

const Header: React.FC<HeaderProps> = ({ text }) => {
  const styles = useStyles();

  return (
      <AppBar className={styles.wrapper} position="static">
        <Container maxWidth="md" >
          <Typography variant="h5" align="center">
            {text}
          </Typography>
        </Container>
      </AppBar>
  );
}

export default Header;

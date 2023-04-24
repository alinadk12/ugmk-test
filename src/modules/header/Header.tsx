import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BackButton from '../../components/ui/molecules/backButton';
import useStyles from './styles';

export interface IHeader {
  text: string,
  isShowBack?: boolean,
}

type HeaderProps = IHeader;

const Header: React.FC<HeaderProps> = ({ text, isShowBack }) => {
  const styles = useStyles();

  return (
      <AppBar className={styles.wrapper} position="static">
        {isShowBack && <BackButton />}
        <Container maxWidth="md" >
          <Typography variant="h5" align="center">
            {text}
          </Typography>
        </Container>
      </AppBar>
  );
}

export default Header;

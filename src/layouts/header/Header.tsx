import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import BackButton from 'src/components/ui/molecules/buttons/backButton/BackButton';
import TextH5 from 'src/components/ui/atoms/text/TextH5';
import useStyles from './styles';

export interface IHeader {
  text: string,
  showBack?: boolean,
}

type HeaderProps = IHeader;

const Header: React.FC<HeaderProps> = ({ text, showBack }) => {
  const styles = useStyles();

  return (
      <AppBar className={styles.wrapper} position="static">
        {showBack && <BackButton />}
        <Container maxWidth="md" >
          <TextH5 align="center">
            {text}
          </TextH5>
        </Container>
      </AppBar>
  );
}

export default Header;

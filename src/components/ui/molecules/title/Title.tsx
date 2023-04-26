import React from 'react';
import TextH4 from '../../atoms/text/TextH4';
import useStyles from './styles';

type TitleProps = {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <TextH4>
        {children}
      </TextH4>
    </div>
  )
}

export default Title;

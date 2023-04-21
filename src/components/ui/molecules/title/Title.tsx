import React from 'react';
import { TypographyH4 } from '../../atoms/typography';
import useStyles from './styles';

type TitleProps = {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <TypographyH4>
        {children}
      </TypographyH4>
    </div>
  )
}

export default Title;

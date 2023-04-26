import React from 'react';
import Header, { IHeader } from '../header/Header';
import useStyles from './styles';

type MainLayoutProps = {
  children: React.ReactNode,
  header: IHeader,
};

const MainLayout: React.FC<MainLayoutProps> = ({children, header}) => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      <Header {...header} />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout;

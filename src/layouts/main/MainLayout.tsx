import React from 'react';
import Header from 'src/modules/header/Header';
import useStyles from './styles';

type MainLayoutProps = {
  children: React.ReactNode,
  header: string,
};

const MainLayout: React.FC<MainLayoutProps> = ({children, header}) => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      <Header text={header} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;

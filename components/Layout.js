import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';

import { useContext } from 'react';
import { AppContext } from '../context/state';
import Header from './Header';

const Layout = ({ children }) => {
  const { loading } = useContext(AppContext);
  if (loading) {
    return <>s</>;
  } else
    return (
      <>
        <Header />
        {children}
      </>
    );
};

export default Layout;

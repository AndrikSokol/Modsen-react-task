import { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Header from '@/components/header';
import Footer from '@/components/footer';

const CommonPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonPage;

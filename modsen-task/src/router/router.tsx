import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { Home } from '../pages/Home';
import SolutionsPage from '@/pages/SolutionsPage';
import CommonPage from '@/pages/commonPage/CommonPage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/about/AboutPage';
import ContactsPage from '@/pages/contacts/ContactsPage';
import { Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: ROUTES.COMMON,
    element: <CommonPage />,

    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SOLUTIONS,
        element: <SolutionsPage />,
      },
      {
        path: ROUTES.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <ContactsPage />,
      },
    ],
  },
]);

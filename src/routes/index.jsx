import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { NotFoundPage, LoginPage, MainPage, ServerPage, DocumentsPage, DetailsPage } from './components';

import Layout from '../components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ServerPage />}>
        <Route path="main" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>,
  ),
  {
    basename: '/',
  },
);

export default router;

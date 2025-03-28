import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ServerPage = lazy(() => import('../pages/ServerPage'));
const DocumentsPage = lazy(() => import('../pages/DocumentsPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage'));

export {
  LoginPage,
  NotFoundPage,
  MainPage,
  ServerPage,
  DocumentsPage,
  DetailsPage,
};


import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '~/shared/components/notFound/NotFound';
import Main from '~/app/pages/Main';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

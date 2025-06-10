import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound, NavDataItem } from 'mod-arch-shared';
import useUser from './hooks/useUser';

export const useAdminSettings = (): NavDataItem[] => {
  const { clusterAdmin } = useUser();

  if (!clusterAdmin) {
    return [];
  }

  return [
    {
      label: 'Settings',
      children: [{ label: 'App', path: '/settings' }],
    },
  ];
};

export const useNavData = (): NavDataItem[] => [
  {
    label: 'App',
    path: '/app',
  },
  ...useAdminSettings(),
];

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/model-registry" replace />} />
    {/* <Route path="/app/*" element={<AppRoute />} /> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

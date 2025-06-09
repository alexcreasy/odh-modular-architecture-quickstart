import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import './app.css';
import { Bullseye, Page, PageSidebar, Spinner } from '@patternfly/react-core';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  // const {
  //   configSettings,
  //   userSettings,
  //   loaded: configLoaded,
  //   loadError: configError,
  // } = useSettings();
  //
  // const { namespacesLoaded, namespacesLoadError, initializationError } =
  //   React.useContext(NamespaceSelectorContext);
  //
  // const username = userSettings?.userId;
  //
  // React.useEffect(() => {
  //   if (MOCK_AUTH && username) {
  //     localStorage.setItem(AUTH_HEADER, username);
  //   } else {
  //     localStorage.removeItem(AUTH_HEADER);
  //   }
  // }, [username]);
  //
  // const contextValue = React.useMemo(
  //   () =>
  //     configSettings && userSettings
  //       ? {
  //           config: configSettings!,
  //           user: userSettings!,
  //         }
  //       : null,
  //   [configSettings, userSettings],
  // );
  //
  // const error = configError || namespacesLoadError || initializationError;

  const sidebar = <PageSidebar isSidebarOpen={false} />;

  // // We lack the critical data to startup the app
  // if (error) {
  //   // There was an error fetching critical data
  //   return (
  //     <Page sidebar={sidebar}>
  //       <PageSection>
  //         <Stack hasGutter>
  //           <StackItem>
  //             <Alert variant="danger" isInline title="General loading error">
  //               <p>
  //                 {configError?.message ||
  //                   namespacesLoadError?.message ||
  //                   initializationError?.message ||
  //                   'Unknown error occurred during startup'}
  //               </p>
  //               <p>Logging out and logging back in may solve the issue</p>
  //             </Alert>
  //           </StackItem>
  //           <StackItem>
  //             <Button
  //               variant="secondary"
  //               onClick={() => logout().then(() => window.location.reload())}
  //             >
  //               Logout
  //             </Button>
  //           </StackItem>
  //         </Stack>
  //       </PageSection>
  //     </Page>
  //   );
  // }

  // Waiting on the API to finish
  // const loading =
  //   !configLoaded || !userSettings || !configSettings || !contextValue || !namespacesLoaded;

  const loading = false;

  return loading ? (
    <Bullseye>
      <Spinner />
    </Bullseye>
  ) : (
    // <AppContext.Provider value={contextValue}>
    <Page mainContainerId="primary-app-container" sidebar={sidebar}>
      <AppRoutes />
    </Page>
    // </AppContext.Provider>
  );
};

export default App;

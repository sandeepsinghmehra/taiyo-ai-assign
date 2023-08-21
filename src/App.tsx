import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Contact from './pages/Contact';
import ChartsMap from './pages/ChartsMap';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Contact />
    ),
  },
  {
    path: "/create-contact",
    element: (
      <CreateContact />
    ),
  },
  {
    path: "/edit-contact/:contactId",
    element: (
      <EditContact />
    ),
  },
  {
    path: "maps",
    element: <ChartsMap />,
  },
]);
export const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <div className={'h-full'}>
            <Toaster />
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

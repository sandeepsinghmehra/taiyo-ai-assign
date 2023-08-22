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
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import store from './redux/store';
import Dashboard from './pages/Dashboard';
import { Map } from './components/map';

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
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "map",
    element: <Map />
  }
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

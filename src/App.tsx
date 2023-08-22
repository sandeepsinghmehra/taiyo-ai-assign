import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Contact from './pages/Contact';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import store from './redux/store';
import Dashboard from './pages/Dashboard';

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

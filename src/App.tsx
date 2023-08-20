import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contact from './pages/Contact';
import ChartsMap from './pages/ChartsMap';
import CreateContact from './pages/CreateContact';

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
    path: "maps",
    element: <ChartsMap />,
  },
]);
function App() {
  return (
    <div className={'h-full'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

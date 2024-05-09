import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';
import { Toaster } from 'sonner';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>404</h1>,
      children: routes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> <Toaster />
    </>
  );
}

export default App;

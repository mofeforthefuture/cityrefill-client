import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>404</h1>,
      children: routes,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} /> <Toaster />
    </Provider>
  );
}

export default App;

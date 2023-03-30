import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

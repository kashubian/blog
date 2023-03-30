import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

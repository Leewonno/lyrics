// Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './main/Main';
import { Translate } from './translate/Translate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/translate',
        element: <Translate />
      }
    ],
  },
  
]);

export default router;
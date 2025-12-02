// Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './main/Main';
import { Translate } from './translate/Translate';
import { Member } from './member/Member';

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
      },
      {
        path: '/member',
        element: <Member />
      }
    ],
  },
  
]);

export default router;
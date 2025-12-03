// Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './main/Main';
import { Translate } from './translate/Translate';
import { Member } from './member/Member';
import Album from './album/Album';

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
      },
      {
        path: '/album',
        element: <Album />
      }
    ],
  },
  
]);

export default router;
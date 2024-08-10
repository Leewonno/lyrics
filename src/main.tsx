import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./assets/fonts/fonts.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

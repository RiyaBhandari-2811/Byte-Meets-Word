import './scss/theme/theme.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@routing/router';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

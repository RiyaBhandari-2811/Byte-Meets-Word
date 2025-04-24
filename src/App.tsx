import './scss/theme/theme.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@routing/router';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PersistGate>
  );
}

export default App;

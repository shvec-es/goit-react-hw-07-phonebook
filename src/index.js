import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { store } from 'redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

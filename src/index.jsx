import ReactDOM from 'react-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/reset.css'
import 'assets/styles/global.sass'

ReactDOM.render(
  <>
    <Routes />
  </>,
  document.getElementById('root')
)
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Helmet>
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/jquery-ui.min.js"></script>
      <script src="js/jquery.slicknav.js"></script>
      <script src="js/mixitup.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/main.js"></script>
    </Helmet>
    <App />
  </BrowserRouter>
);

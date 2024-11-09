import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layouts/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Layout />
      <ToastContainer autoClose={1500}/>
    </>
  );
}

export default App;

import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <ToastContainer />
      <RoutesApp />
    </div>
  );
}

export default App;

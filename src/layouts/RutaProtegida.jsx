import { Navigate} from 'react-router-dom';
import { Header } from '../components/Header';


export const RutaProtegida = () => {

    const token = localStorage.getItem('token');

  return (

    <>
        {token ? (
          <div className='bg-gray-100'>
            <Header />
          </div>
        ) : <Navigate to='/login'/>}
    </>
  )
}
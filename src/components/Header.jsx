import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

    const handleBotonCerrarSesion = () => {
        localStorage.clear();
        navigate('/');

    }


  return (
    <nav className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-15 h-10 mr-4"/>
            </div>
            <div className="flex">
                <button  
                    id="btn-login" className="px-4 py-2 text-white font-bold"
                    onClick={handleBotonCerrarSesion}
                >Cerrar sesion</button>
            </div>
    </nav>
  )
}
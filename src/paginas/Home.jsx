import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const Home = () => {
  return (
    <>
        <nav className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-15 h-10 mr-4"/>
            </div>
            <div className="flex">
                <Link to="/login" id="btn-login" className="px-4 py-2 text-white font-bold">Login</Link>
            </div>
        </nav>
    </>
  )
}

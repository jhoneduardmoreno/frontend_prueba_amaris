import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alerta } from "../components/Alerta"
import clienteAxios from "../config/clienteAxios";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});


  const navigate = useNavigate();


  const handleSubmit = async e => {

    e.preventDefault();

    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    try {
        const { data } = await clienteAxios.post('/usuarios/login', { email, password});
        setAlerta({});
        localStorage.setItem('token', data.token)
        // // setAuth(data);
        navigate('/admin');
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

    

    
  }

  const {msg } = alerta;




  return (
    <>
        <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
                <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesión y administra tu  
                <span className="text-slate-700 ml-2">Pagina web</span>
                </h1>

                {msg && <Alerta alerta={alerta} />}

                <form 
                    className="my-10 bg-white shadow rounded-lg p-10 shadow"
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="user"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>

                    <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    >Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>

                    <input
                    type="submit"
                    value="Iniciar sesión"
                    className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded
                    hover:cursor-pointer hover:bg-sky-800 transition-colors"
                    />

                    <Link
                        className="block text-center my-5 text-slate-500 uppercase text-sm"
                        to="/"
                    >Volver al Inicio</Link>

                </form>

                
            </div>
        </main>
    
      
    
    </>
  )
}

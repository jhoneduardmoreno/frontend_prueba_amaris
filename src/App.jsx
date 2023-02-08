import { Home } from "./paginas/Home"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from "./paginas/Login";
import { AuthProvider } from "./context/AuthProvider";
import { RutaProtegida } from "./layouts/RutaProtegida";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<RutaProtegida />}>
              
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

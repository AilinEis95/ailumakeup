//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//Estilos
import './css/general.css'

import Header from './componentes/header'
import Pie from './componentes/pie'
import Objetos from './componentes/objetos'
import Pruebas from './componentes/pruebas'
import ClaseForm from './componentes/claseform'
import Carrusel from "./componentes/carrusel"
//import Principal from "./componentes/principal"
import Principal from "./componentes/principal"


const router = createBrowserRouter ([
  {
    path: "/",
    Component: Principal 
  },
  {
    path: "/clase-formulario",
    Component: ClaseForm
  },
  {
    path: "/pruebas",
    Component: Pruebas
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Pie />
  </StrictMode>,
)

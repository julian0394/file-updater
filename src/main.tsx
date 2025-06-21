import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import Providers from './components/Providers.tsx'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)

// TODO - Agregar checkbox individual a cada UploadedItem.
// TODO - Hacer cada UploadedItem un botón clickeable para activar checkbox.
// TODO - Agregar botón para seleccionar/des-seleccionar todos los UploadedItem (+ control en zustand).
// TODO - Agregar botón para eliminar todos los UploadedItem seleccionados (+ control en zustand).
// TODO - Agregar barra de progreso para los UploadedItem.
// TODO - Revisar el control de tamaño total permitido y el funcionamiento al subir multiples archivos.
// TODO - Retocar el ancho máximo y disposición de los UploadItems cuando son muchos.
// TODO - Agregar animaciones:
//            - Al subir un archivo
//            - Al eliminar un archivo
//            - Al seleccionar/deseleccionar un archivo
//            - Al abrir / cerrar un modal
//            - Al abrir / cerrar un popover
// TODO - Agregar info del proyecto (header - Modal).
// TODO - Agregar datos de contato (header - Popover).
// TODO - Agregar aria-labels.
// TODO - Agregar data-testid.
// TODO - Realizar pruebas unitarias.

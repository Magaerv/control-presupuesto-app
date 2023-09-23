import { Fragment } from 'react';
import Pregunta from './components/Pregunta';


function App () {


  return (
    <Fragment>
      <div className="containter">
        <header>
          <h1>Control de Presupuesto</h1>
          <div className="contenido-principal contenido">
            <Pregunta />
          </div>
        </header>
      </div>
    </Fragment>
  )
}

export default App

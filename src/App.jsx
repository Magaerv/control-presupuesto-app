import { useEffect, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import CalculoTotal from './components/CalculoTotal';

function App () {

  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [showPregunta, setShowPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);



  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto])

      const totalGasto = resto - gasto.cantidad;
      setResto(totalGasto);

      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, resto]);




  const eliminarGasto = (id) => {
    const gastoEliminado = gastos.find((g) => g.id === id);

    if (gastoEliminado) {
      const nuevoResto = resto + gastoEliminado.cantidad;
      setResto(nuevoResto);
    }

    const gastosFiltrados = gastos.filter((g) => g.id !== id);
    setGastos(gastosFiltrados);
  };


  return (
    <div className="containter">
      <header>
        <h1>Control de Presupuesto</h1>
        <div className="contenido-principal contenido">
          {showPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setResto={setResto}
              setShowPregunta={setShowPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                  onEliminar={eliminarGasto}
                />
                <CalculoTotal
                  presupuesto={presupuesto}
                  resto={resto}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App

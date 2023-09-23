import { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import Error from './Error';

const Pregunta = ({ setPresupuesto, setResto, setShowPregunta }) => {

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);


  const agregarPresupuesto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true)
      return
    }

    setError(false);
    setPresupuesto(cantidad);
    setResto(cantidad);
    setShowPregunta(false);
  }


  return (
    <Fragment>
      <h2>¿Cuál es tu ingreso mensual?</h2>
      {error ? <Error mensaje="El valor es incorrecto" /> : null}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Cuál es tu ingreso mensual?"
          onChange={e => setCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir ingreso"
        />
      </form>
    </Fragment>
  )
}

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setResto: PropTypes.func.isRequired,
  setShowPregunta: PropTypes.func.isRequired
}

export default Pregunta
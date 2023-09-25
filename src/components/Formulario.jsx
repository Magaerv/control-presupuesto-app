import { useState } from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import Error from './Error';

const Formulario = ({ setGasto, setCrearGasto }) => {

  const [tipoGasto, setTipoGasto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);


  const agregarGasto = e => {
    e.preventDefault();

    if (parseFloat(cantidad) < 1 || isNaN(parseFloat(cantidad)) || tipoGasto.trim() === "") {
      setError(true);
      return
    }

    setError(false);

    const gasto = {
      tipoGasto,
      cantidad: parseFloat(cantidad),
      id: nanoid(),
    }

    setGasto(gasto);
    setCrearGasto(true);
    setTipoGasto("");
    setCantidad("");
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>
      {error ? (<Error
        mensaje="Información obligatoria, revisar datos ingresados"
      />
      ) : (null)
      }
      <div className="campo">
        <label>Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={tipoGasto}
          onChange={e => setTipoGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Importe</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(e.target.value === "" ? 0 : parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  )
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
}

export default Formulario
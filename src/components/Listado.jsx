import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos, onEliminar }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        gasto && gasto.id ? (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            onEliminar={onEliminar}
          />) : null
      ))}
    </div>
  )
}

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
  onEliminar: PropTypes.func,
}

export default Listado
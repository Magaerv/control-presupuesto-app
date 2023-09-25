import PropTypes from "prop-types";

const Gasto = ({ gasto, onEliminar }) => {

  return (
    <li className="gastos">
      <p>
        {gasto.tipoGasto}
        <span className="gasto">$ {gasto.cantidad}</span>
      </p>
      <div>
        <button onClick={() => onEliminar(gasto.id)}>Eliminar</button>
      </div>
    </li>
  )
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
  onEliminar: PropTypes.func
}

export default Gasto
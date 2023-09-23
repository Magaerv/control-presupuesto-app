import { Fragment } from 'react';
import PropTypes from "prop-types";
import { revisarTotalGasto } from '../helpers';

const CalculoTotal = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {presupuesto}
      </div>
      <div className={revisarTotalGasto(presupuesto, resto)}>
        Resto: ${resto}
      </div>
    </Fragment>
  )
}

CalculoTotal.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  resto: PropTypes.number.isRequired
}

export default CalculoTotal
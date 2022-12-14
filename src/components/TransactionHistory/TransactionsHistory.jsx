import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export const TransactionHistory = ({ items }) => (
    <table className={css.transationHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    { items.map (item => (
           <tr key= {item.id}>
           <td>{item.type}</td>
           <td>{item.amount}</td>
           <td>{item.currency}</td>
         </tr> 
    ))}

  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf (
        PropTypes.shape( {
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}



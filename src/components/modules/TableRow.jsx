import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";

const TableRow = ({coin : {
    image, 
    symbol,
    name, 
    current_price, 
    total_volume, 
    price_change_percentage_24h:price_change}}) => {
    return (
    <tr>
        <td>
            <div className={styles.symbol}>
                <img src={image} />
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td className={price_change > 0 ? styles.success : styles.error}>${price_change.toFixed(2)}</td>
        <td>${total_volume.toLocaleString()}</td>
        <td><img src={price_change > 0 ? chartUp : chartDown } alt="coin.name" /></td>
    </tr>
    )
}

export default TableRow
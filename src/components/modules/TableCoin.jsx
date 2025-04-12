import { ClipLoader } from "react-spinners";
import TableRow from "./TableRow"
import styles from "./TableCoin.module.css";


function TableCoin({coins, isLoading}) {
    //console.log(coins)
  return (
    <div className={styles.container}>
        {isLoading ? <ClipLoader color="#36d7b7" loading={true} size={50} /> : 
        (<table className={styles.table}>
            <thead>
                <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Value</th>
                <th></th>
                </tr>
            </thead>
            <tbody>{coins.map(coin =>
            <TableRow coin={coin} key={coin.id}/>
            )}
            </tbody>
        </table>)}
    </div>
  )
}

export default TableCoin


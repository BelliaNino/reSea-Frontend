import styles from './OrderSummary.module.css';

function OrderSummary({ cartItems }) {
    const total = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);

    return (

        <div className={`${styles.container} p-4 rounded shadow-sm`}>
            <h2 className="mb-4">Riepilogo Ordine</h2>

            <ul className={`${styles.list} list-unstyled`}>
                {cartItems.map((item) => (
                    <li key={item.id} className={`${styles.item} d-flex justify-content-between mb-2`}>
                        <span>{item.name} x {item.quantity}</span>
                        <span>€{(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            <hr />

            <div className={`${styles.total} d-flex justify-content-between`}>
                <span>Totale:</span>
                <span>€{total.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default OrderSummary;
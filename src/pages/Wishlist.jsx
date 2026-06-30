import React from "react"
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import styles from "./Wishlist.module.css";

function Wishlist() {
    const { wishlist, addToWishlist, addHandler } = useAppContext();

    return (
        <>
            {wishlist.length === 0 ? (
                <div className="d-flex flex-column align-items-center justify-content-center py-5">
                    <i className="bi bi-heart text-warning" style={{ fontSize: '4rem' }}></i>
                    <h4 className="mt-3 text-dark">La tua lista dei desideri è attualmente vuota</h4>
                    <Link to="/products" className="btn btn-primary mt-3">Vai allo shop</Link>
                </div>
            ) : (
                <div className="container py-5">
                    <h2 className={styles.wishlistTitle}>La tua Wishlist 💙</h2>

                    <div className={styles.wishlistGrid}>
                        {wishlist.map((item) => (
                            <div key={item.id} className={styles.wishlistCard}>
                                <div className={styles.wishlistImage}>
                                    <img src={item.image} alt={item.name} />
                                    <span className={styles.wishlistBadge}>
                                        ♻ Plastica Riciclata
                                    </span>
                                </div>
                                <div className={styles.wishlistBody}>
                                    <h6>{item.name}</h6>
                                    <p className={styles.wishlistPrice}>
                                        € {item.price.toFixed(2)}
                                    </p>
                                    <div className={styles.wishlistButtons}>
                                        <button
                                            className={`btn ${styles.wishlistCart}`}
                                            onClick={() => addHandler(item)}
                                        >
                                            <i className="bi bi-cart-plus"></i>
                                        </button>
                                        <button
                                            className={`btn ${styles.wishlistDelete}`}
                                            onClick={() => addToWishlist(item)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Wishlist;
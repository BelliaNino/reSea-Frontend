import React from "react"
import { Link } from "react-router-dom";

function Product() {
    return (
        <>
            <div className="container py-3">
                <Link to={`/ProductDetail`} className="text-decoration-none text-dark d-inline-block">
                    <div className="card" style={{ cursor: "pointer", width: "18rem" }}>
                        <img src="..." className="card-img-top" style={{ height: "250px", objectFit: "contain" }} />
                        <div className="card-body p-2">
                            <h6 className="card-title mb-1">Titolo</h6>
                            
                            <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text fw-bold mb-0 small">€ 170</p>

                            <button
                        type="button"
                        className="btn btn-black-50 rounded-circle"
                        onClick=""
                    >                      
                                <i className="bi bi-heart-fill text-danger"></i>
                    </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Product
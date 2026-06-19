import React from "react";
import { Link, Outlet } from "react-router-dom";

function Structure() {
    return (
        <>
            <nav className="bg-dark" style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Link to="/Homepage">
                    <button>Home</button>
                </Link>
                <Link to="/ProductDetail">
                    <button>Prodotti</button>
                </Link>
                <Link to="/NotFound">
                    <button>About</button>
                </Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Structure;
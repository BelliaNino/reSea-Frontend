import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCategories } from "../Context/CategoriesContext";

function Product() {
    const { categories, categoriesLoading, categoriesError } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState("all");

    const endpoint =
        selectedCategory === "all"
            ? "/products"
            : "/products?category=" + encodeURIComponent(selectedCategory);

    const { data, loading, error } = useFetch(endpoint)

    if (loading) return <p>Caricamento dei prodotti in corso...</p>
    if (error) return <p>Qualcosa è andato storto...</p>

    return (
        <div className="container py-3">
            <div className="mb-3 d-flex align-items-center gap-2">
                <label htmlFor="categoryFilter" className="form-label mb-0">
                    Categoria
                </label>
                <select
                    id="categoryFilter"
                    className="form-select w-auto"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    disabled={categoriesLoading}
                >
                    <option value="all">Tutte</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.slug}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {categoriesError && (
                    <small className="text-danger">Errore nel caricamento categorie</small>
                )}
            </div>


            <div className="d-flex flex-wrap gap-3">
                {data &&
                    data.map((item) => (
                        <Link
                            to={"/products/" + item.slug}
                            className="text-decoration-none text-dark d-inline-block"
                            key={item.id}
                        >
                            <div className="card" style={{ cursor: "pointer", width: "18rem" }}>
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "contain" }}
                                    alt={item.name}
                                />
                                <div className="card-body p-2">
                                    <h6 className="card-title mb-1">{item.name}</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-text fw-bold mb-0 small">
                                            €{Number(item.price).toFixed(2)}
                                        </p>
                                        <button type="button" className="btn btn-black-50 rounded-circle">
                                            <i className="bi bi-heart-fill text-danger"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Product
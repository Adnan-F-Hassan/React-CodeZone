import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Products.css';

function Products(){

    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/products')
        .then((res) => res.json())
        .then((date) =>{
            setProducts()
        })
    }, [])


    return (
        <>
            <h1>Products Page</h1>

            <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>

            <table class="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.description.slice(0,20)}...</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                    <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Products;
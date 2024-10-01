import { Link } from "react-router-dom";

function Products(){
    return (
        <>
            <h1>Products Page</h1>

            <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>

            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Product 1</td>
                        <td>Price</td>
                        <td>
                            <button className="btn btn-danger btn-sm">Delete</button>
                            <button className="btn btn-info btn-sm">View</button>
                            <button className="btn btn-primary btn-sm">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Products;
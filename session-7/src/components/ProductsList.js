
function ProductsList(props) {
  return (
    <div className="products-list">
      {props.products.map((product) => <h1 key={product.id}>{product.title}</h1>)} 
    </div>
  );
}

export default ProductsList;
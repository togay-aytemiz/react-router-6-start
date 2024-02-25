import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{productId}</p>
      <Link to="/products" className="btn">
        Back to products
      </Link>
    </section>
  );
};

export default SingleProduct;

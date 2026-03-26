import { useParams } from "react-router-dom";
import newProducts from "../../data/newProducts";
import Navbar from "../../components/Navbar";

const ProductDetails = () => {

  const { id } = useParams();

  const product = newProducts.find(
    (p) => p.id === parseInt(id)
  );

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold mb-6">
          {product.name}
        </h1>

        <div className="grid grid-cols-2 gap-10">

          <img src={product.image} />

          <div>

            <p><strong>Model:</strong> {product.model}</p>
            <p><strong>Processor:</strong> {product.specs.processor}</p>
            <p><strong>RAM:</strong> {product.specs.ram}</p>
            <p><strong>Storage:</strong> {product.specs.storage}</p>
            <p><strong>Display:</strong> {product.specs.display}</p>
            <p><strong>Warranty:</strong> {product.specs.warranty}</p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-500 text-sm">
        {product.specs}
      </p>

      <p className="text-blue-600 font-bold mt-2">
        {product.price}
      </p>

      <Link to={`/product/${product.id}`}>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Enquire Now
        </button>
      </Link>

    </div>
  );
};

export default ProductCard;
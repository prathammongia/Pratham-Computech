import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  return (
    <div>

      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-8">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Products;
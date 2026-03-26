import Navbar from "../../components/Navbar";
import { useState } from "react";
import newProducts from "../../data/newProducts";
import { useNavigate } from "react-router-dom";

const NewProducts = () => {

  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const sortedProducts = [...newProducts].sort((a, b) => {

    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);

    return 0;
  });

  return (
    <div>

      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            New Products & Systems
          </h1>

          <select
            className="border px-4 py-2 rounded"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {sortedProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl p-4 cursor-pointer transition"
              onClick={() => navigate(`/product/${product.id}`)}
            >

              <img
                src={product.image}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="text-lg font-semibold mt-3">
                {product.name}
              </h2>

              <p className="text-gray-500">
                {product.model}
              </p>

              <p className="text-orange-500 font-bold mt-2">
                ₹{product.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default NewProducts;
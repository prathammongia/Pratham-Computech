import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";

const Brands = () => {

  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6
  ];

  return (
    <div className="py-20 px-8 bg-gradient-to-b from-white to-orange-50">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Brands We Deal In
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {brands.map((brand, index) => (
          <div
            key={index}
            className="
              bg-white 
              rounded-xl 
              p-6 
              shadow-md 
              transition 
              duration-300 
              hover:shadow-2xl 
              hover:-translate-y-2 
              cursor-pointer
            "
          >
            <img
              src={brand}
              alt="brand"
              className="h-20 mx-auto hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Brands;
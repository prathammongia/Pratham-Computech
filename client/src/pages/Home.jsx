import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-6">

          <h1 className="text-6xl font-bold">
            Pratham Computech
          </h1>

          <p className="mt-6 text-xl">
            New & Used Laptops, PCs & Accessories
          </p>

          <div className="mt-8 flex gap-4">

            <Link to="/products">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold">
                Browse Products
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* Brands Section */}
      <Brands />

    </div>
  );
};

export default Home;
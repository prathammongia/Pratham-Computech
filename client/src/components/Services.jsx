import { 
  Monitor, 
  RefreshCcw, 
  Wrench, 
  Building 
} from "lucide-react";

import { Link } from "react-router-dom";

const Services = () => {

  const services = [
    {
      title: "New Products & Systems",
      description: "Buy brand new laptops, desktops and accessories.",
      icon: Monitor,
      link: "/services/new-products"
    },
    {
      title: "Sell Your Device",
      description: "Sell your used laptops and computer systems.",
      icon: RefreshCcw,
      link: "/services/sell-device"
    },
    {
      title: "Repair & Maintenance",
      description: "Laptop, PC repair and maintenance services.",
      icon: Wrench,
      link: "/services/repair"
    },
    {
      title: "Business IT Solutions",
      description: "Contract-based laptops, rentals and IT support.",
      icon: Building,
      link: "/services/business-solutions"
    }
  ];

  return (
    <div className="py-20 px-8 bg-gradient-to-b from-orange-50 to-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Services
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

  {services.map((service, index) => {

    const Icon = service.icon;

    return (

      <Link to={service.link} key={index}>

        <div
          className="
            bg-white 
            rounded-xl 
            p-8 
            shadow-md 
            hover:shadow-2xl 
            hover:-translate-y-2 
            transition 
            duration-300
            cursor-pointer
            text-center
            h-full
            flex
            flex-col
            justify-between
          "
        >

          <div>

            <div className="flex justify-center mb-4">
              <Icon size={40} className="text-orange-500" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>

          </div>

        </div>

      </Link>

    );
  })}

</div>

    </div>
  );
};

export default Services;
import { 
  Monitor, 
  RefreshCcw, 
  Wrench, 
  Building 
} from "lucide-react";

const Services = () => {

  const services = [
    {
      title: "New Products & Systems",
      description: "Buy brand new laptops, desktops and accessories.",
      icon: Monitor
    },
    {
      title: "Sell Your Device",
      description: "Sell your used laptops and computer systems.",
      icon: RefreshCcw
    },
    {
      title: "Repair & Maintenance",
      description: "Laptop, PC repair and maintenance services.",
      icon: Wrench
    },
    {
      title: "Business IT Solutions",
      description: "Contract-based laptops, rentals and IT support.",
      icon: Building
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (
            <div
              key={index}
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
              "
            >

              <div className="flex justify-center mb-4">
                <Icon 
                  size={40} 
                  className="text-orange-500"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.description}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Services;
import React from "react";
import dog from '../../../../Resources/OurServices/dog.png'
const services = [
  {
    title: "Wholesale",
    description: "Providing high-quality pharmaceuticals in bulk at competitive prices.",
    image: dog,
  },
  {
    title: "Medical Center",
    description: "Delivering advanced treatments and expert care for your health.",
    image: dog,
  },
  {
    title: "Animal Care",
    description: "Comprehensive health services for pets and livestock.",
    image:dog,
  },
  {
    title: "Pesticide and Insecticide",
    description: "Offering effective and reliable pest control solutions.",
    image: dog,
  },
  {
    title: "Animal Care",
    description: "Producing nutritious and balanced feed for healthier livestock.",
    image: dog,
  },
];

const Services = () => {
  return (
    <div className="bg-slate-100 py-16 hidden lg:block">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-500">Our Services</h2>
        <div className="mt-12 flex gap-10 flex-wrap ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden w-[20vw] ml-10 ${service.title=="Pesticide and Insecticide" && 'ml-[14vw]'}`}
            >
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
                <a
                  href="#"
                  className="text-blue-500 font-semibold mt-4 inline-block"
                >
                  Read
                </a>
                <img
                src={dog}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaRoad, FaFileAlt, FaUserShield, FaTools, FaAmbulance } from 'react-icons/fa';
import EmergencyResponse from './EmergencyResponse';

const ServicesSection = () => {
  const services = [
    {
      title: "Traffic Control Plans",
      icon: <FaRoad className="text-3xl" />,
      link: "/service/1.webp"
    },
    {
      title: "Permit Application",
      icon: <FaFileAlt className="text-3xl" />,
      link: "/service/2.JPG"
    },
    {
      title: "Accredited Traffic Controllers",
      icon: <FaUserShield className="text-3xl" />,
      link: "/service/3.JPG"
    },
    {
      title: "Equipment Hire",
      icon: <FaTools className="text-3xl" />,
      link: "/service/4.jpg"
    },
    {
      title: "Emergency Response",
      icon: <FaAmbulance className="text-3xl" />,
      link: "/service/5.jpg"
    },
    {
      title: "Custom Solutions",
      icon: <FaRoad className="text-3xl" />,
      link: "/service/6.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-anton uppercase">
            Australia's Premier Traffic Management Solutions
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              With over 10 years of experience in the industry, we deliver fully compliant traffic management plans, permits and on-site control for projects of all sizes across Australia.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={service.title}
              className="group relative h-[420px] overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.link}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                  quality={60}
                />
                <div className="absolute inset-0 bg-black opacity-50 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center  p-8 text-white">
                <div className="mb-6 p-4 bg-blue-500 w-14 h-14 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <span className="flex items-center gap-2 text-white hover:text-blue-400 font-medium transition-colors w-fit group/link">
                  <span className="border-b border-transparent group-hover/link:border-white pb-1 transition-all">
                    Learn More
                  </span>
                  <FaChevronRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <EmergencyResponse/>
      </div>
    </section>
  );
};

export default ServicesSection;
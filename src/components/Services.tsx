
import { Home, Building2, Hammer, Lightbulb, Ruler, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Custom homes that reflect your lifestyle and dreams, from concept to completion.",
      features: ["Custom Home Design", "Renovations & Extensions", "Interior Space Planning"]
    },
    {
      icon: Building2,
      title: "Commercial Architecture",
      description: "Innovative commercial spaces that enhance productivity and brand identity.",
      features: ["Office Buildings", "Retail Spaces", "Mixed-Use Developments"]
    },
    {
      icon: Hammer,
      title: "Construction Management",
      description: "Comprehensive project oversight ensuring quality, timeline, and budget adherence.",
      features: ["Project Planning", "Quality Control", "Budget Management"]
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Expert guidance on design decisions, material selection, and space optimization.",
      features: ["Design Review", "Material Selection", "Space Optimization"]
    },
    {
      icon: Ruler,
      title: "Planning & Permits",
      description: "Navigate complex approval processes with our expertise in local regulations.",
      features: ["Permit Applications", "Zoning Compliance", "Code Review"]
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "Transparent communication and collaborative design process throughout your project.",
      features: ["Regular Updates", "Design Workshops", "3D Visualizations"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final construction, we provide comprehensive 
            architectural services tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="text-blue-600" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

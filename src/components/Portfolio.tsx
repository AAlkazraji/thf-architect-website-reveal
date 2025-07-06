
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Family Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=5760&auto=format&fit=crop",
      description: "A stunning contemporary home featuring sustainable materials and smart home integration."
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=5657&auto=format&fit=crop",
      description: "Award-winning office complex designed to promote collaboration and well-being."
    },
    {
      title: "Urban Mixed-Use Development",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=5760&auto=format&fit=crop",
      description: "Innovative mixed-use building combining retail, office, and residential spaces."
    },
    {
      title: "Luxury Penthouse",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=5512&auto=format&fit=crop",
      description: "Sophisticated penthouse design maximizing natural light and city views."
    },
    {
      title: "Cultural Center",
      category: "Public",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=4000&auto=format&fit=crop",
      description: "Community cultural center featuring flexible spaces and sustainable design."
    },
    {
      title: "Sustainable Office Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=3346&auto=format&fit=crop",
      description: "LEED Platinum certified office tower with innovative green technologies."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of architectural projects, each one a testament 
            to our commitment to design excellence and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

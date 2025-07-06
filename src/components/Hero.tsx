
import { ArrowRight, Award, Users, Building } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop')`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building
              <span className="block text-blue-400">Tomorrow's</span>
              Architecture
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              THF Architecture transforms visions into reality through innovative design, 
              sustainable solutions, and exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building className="text-blue-400 mr-2" size={24} />
                  <span className="text-3xl font-bold">150+</span>
                </div>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-blue-400 mr-2" size={24} />
                  <span className="text-3xl font-bold">98%</span>
                </div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-blue-400 mr-2" size={24} />
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <p className="text-gray-300">Awards Won</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop"
                alt="Modern Architecture"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">15+ Years</p>
                <p className="text-sm opacity-90">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
